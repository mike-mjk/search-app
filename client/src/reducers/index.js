import { combineReducers } from 'redux';
import twitterReducer from './reducer_twitter';

const rootReducer = combineReducers({
	tweetHtml: twitterReducer
});

export default rootReducer;