import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import './index.css';

const logger = createLogger({});
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import { searchTwitter, oEmbedRequest } from './actions/';
searchTwitter('trump');
oEmbedRequest('https://publish.twitter.com/oembed?url=https://twitter.com/MarySadler19/status/884162950638043136')

ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>
  , document.getElementById('root')
);
