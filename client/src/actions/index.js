import axios from 'axios';
import jsonp from 'jsonp';

export const SEARCH_TWITTER = 'search_twitter';

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
					console.log('tweetHtmlArray', tweetHtmlArray)
					//dontForget if things don't update properly later change the key to something more unique
					const tweetHtmlArrayWithKey = tweetHtmlArray.map((tweet, index) => {
						let key = "key='" + index + "' ";
						return [tweet.slice(0, 12), key, tweet.slice(12)].join('');
					})

					dispatch(
						{ 
							type: SEARCH_TWITTER,
							payload: tweetHtmlArrayWithKey
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


// before trying to implement promise
// function oEmbedRequest(url) {
// 	jsonp(url, null, function(err, data) {
// 		if (err) {
// 			console.error(err.message);
// 		} else {
// 			return data;
// 		}
// 	});
// }