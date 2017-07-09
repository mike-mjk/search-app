import axios from 'axios';

export const SEARCH_TWITTER = 'search_twitter';

export function searchTwitter(term) {
	// return function(dispatch) {
		axios.get('/api/searchtwitter', {params: {term: term}})
		.then(response => {
			// console.log(response);
		});
	// }
}

export function oEmbedRequest(url) {
	axios.get(url)
	.then(response => {
		console.log(response);
	});
}