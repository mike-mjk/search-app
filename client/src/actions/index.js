import axios from 'axios';

export const SEARCH_TWITTER = 'search_twitter';

export function searchTwitter(term) {
	// return function(dispatch) {
		axios.get('/api/searchtwitter')
		.then(response => {
			console.log(response);
		});
	// }
}
