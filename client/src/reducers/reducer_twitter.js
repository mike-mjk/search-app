import { SEARCH_TWITTER } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
	case SEARCH_TWITTER:
		return action.payload;
	default:
		return state
	}
}