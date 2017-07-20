import { SEARCH_YOUTUBE } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
	case SEARCH_YOUTUBE:
		return action.payload;
	default:
		return state
	}
}