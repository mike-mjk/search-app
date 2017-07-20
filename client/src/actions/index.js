import axios from 'axios';
import jsonp from 'jsonp';
import htmlToJson from 'html-to-json';
import _ from 'lodash';

var HtmlToReactParser = require('html-to-react').Parser

export const SEARCH_TWITTER = 'search_twitter';
export const SEARCH_GOOGLE_NEWS = 'search_google_news';
export const SEARCH_YOUTUBE = 'search_youtube';


//--------------------------------------------------
//-------------------YouTube------------------------
//--------------------------------------------------
function extractFromResponse(response) {
	var videos = response.data.items.map(result => {
		return ({
			title: result.snippet.title,
      channelTitle: result.snippet.channelTitle,
     	id: result.id.videoId,
    	thumbnail: result.snippet.thumbnails.medium.url,
    	description: result.snippet.description,
    	tags: result.snippet.tags,
    	publishedAt: result.snippet.publishedAt
		})
	})
	return videos;
}

function twoWeeksAgo() {
	let date = new Date();
	date.setDate(date.getDate() - 14)
	date = new Date(date).toISOString();
	return date;
}

export function searchYouTube(term) {
	return function(dispatch) {
		let date = twoWeeksAgo();
		let params = {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 25,
				type: 'video',
				key: 'AIzaSyBzX4NtsC8SUIeMWPeM2WnEL5rmUVcIWgc',
				publishedAfter: date
			}
		}
		axios.get('https://www.googleapis.com/youtube/v3/search', params)
		.then(response => {
			console.log('response', response);
			let videos = extractFromResponse(response);
			videos = _.mapKeys(videos, 'id')

			dispatch(
				{ 
					type: SEARCH_YOUTUBE,
					payload: videos
				}
			)

		})
	}
}


//--------------------------------------------------
//----------------Google News-----------------------
//--------------------------------------------------

export function searchGoogleNews(term) {
	return function(dispatch) {
		axios.get('/api/searchGoogleNews', {params: {term: term}})
		.then(response => {
			// console.log(response);
			console.log('response.data.items', response.data.items)
			let promises = response.data.items.map(item => {
				return (
					htmlToJson.parse(item.description, {
						'images': ['img', function ($img) {
							return $img.attr('src');
						}]
					})
				)
			})
			Promise.all(promises)
			.then(imgArray => {
				// console.log('result', result)
				response.data.items.map((obj, index) => {
					obj['img'] = imgArray[index].images[0]
				})
				
				let promises = response.data.items.map(item => {
					return (
						htmlToJson.parse(item.description, {
							'outlet': ['font', function ($font) {
								return $font.text();
							}]
						})
					)
				})
				Promise.all(promises)
				.then(outletArray => {
					response.data.items.map((obj, index) => {
						obj['outlet'] = outletArray[index].outlet[0]
					})
					dispatch(
						{	
							type: SEARCH_GOOGLE_NEWS,
							payload: response.data.items
						}
					)
				})
				
			})
		})
	}
}



//--------------------------------------------------
//----------------Twitter---------------------------
//--------------------------------------------------
//takes search term and dispatches action SEARCH_TWITTER
export function searchTwitter(term) {
	  return function(dispatch) {
			axios.get('/api/searchtwitter', {params: {term: term}})
			.then(response => {
				// console.log('response.data', response.data);
				arrayOEmbedRequest(response.data)
				.then(oEmbedResponse => {
					// console.log('oEmbedResponse', oEmbedResponse);
					// console.log('makeArrayOfTweetHtml', makeArrayOfTweetHtml(oEmbedResponse))
					const tweetHtmlArray = makeArrayOfTweetHtml(oEmbedResponse);
					const tweetHtmlArrayWithKey = tweetHtmlArray.map((tweet, index) => {
						let key = "key='" + Math.random() + "' ";
						return [tweet.slice(0, 12), key, tweet.slice(12)].join('');
					})

					const htmlToReactParser = new HtmlToReactParser();
					let reactElement = tweetHtmlArrayWithKey.map(html => {
						return htmlToReactParser.parse(html);
					})

					dispatch(
						{ 
							type: SEARCH_TWITTER,
							payload: reactElement
						}
					)
				})
			});
	  }
}

//oEmbed request for single url
function oEmbedRequest(url) {
	return new Promise((resolve, reject) => {
		jsonp(url, null, function(err, data) {
			if (err) {
				console.error(err.message);
			} else {
				resolve(data);
			}
		});
	})
}

//takes an array of oembed URLS and returns an array of oembed response objects
export function arrayOEmbedRequest(urls) {
	return new Promise((resolve, reject) => {
		let promises = [];
		for (let i = 0; i < urls.length; i++) {
			promises.push(oEmbedRequest(urls[i]))
		}
		Promise.all(promises)
		.then(response => {
			resolve(response);
		})
	});
}

function makeArrayOfTweetHtml(oEmbedArray) {
	return oEmbedArray.map(oEmbed => {
		//dontForget added .trim
		//remove newline and retrun html
		let stripped = oEmbed.html.trim();
		return stripped;
	});
}