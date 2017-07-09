import axios from 'axios';
import jsonp from 'jsonp';

export const SEARCH_TWITTER = 'search_twitter';

export function searchTwitter(term) {
	// return function(dispatch) {
		axios.get('/api/searchtwitter', {params: {term: term}})
		.then(response => {
			// console.log(response);
		});
	// }
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

export function arrayOEmbedRequest(urls) {
	let oEmbedResponseArray = []
	for (let i = 0; i < urls.length; i++) {
		oEmbedRequest(urls[i])
		.then(response => {
			oEmbedResponseArray.push(response);	
		})
	}
	return oEmbedResponseArray;
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