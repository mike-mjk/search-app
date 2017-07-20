import { combineReducers } from 'redux';
import twitterReducer from './reducer_twitter';
import googleNewsReducer from './reducer_google_news';
import youTubeReducer from './reducer_youtube';

const rootReducer = combineReducers({
	tweetHtml: twitterReducer,
	//devquestion naming. this is an array of google news objects what should I name it?
	googleNewsObject: googleNewsReducer,
	youTubeVideos: youTubeReducer
});

export default rootReducer;