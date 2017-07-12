import { SEARCH_GOOGLE_NEWS } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
	case SEARCH_GOOGLE_NEWS:
		return action.payload;
	default:
		return state
	}
}
