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

import { searchTwitter, arrayOEmbedRequest } from './actions/';
searchTwitter('trump');

// let thing = arrayOEmbedRequest([ 'https://publish.twitter.com/oembed?url=https://twitter.com/thugsRbadMK/status/884171918798147584',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/TylerHu99890202/status/884171918617698305',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/marcylauren/status/884171918450069504',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/AlbaneseJoe/status/884171918408069120',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/cyndi_obrion/status/884171918299058178',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/Anna_Tweeterowa/status/884171918299025409',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/crisp_aw/status/884171918210936834',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/SheilaPettifor2/status/884171918206791680',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/KateWalter12/status/884171918198419461',
//   'https://publish.twitter.com/oembed?url=https://twitter.com/preferscleanH2O/status/884171918131183616' ])
// .then(response => {
// 	// console.log(response[0]);
// })
ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>
  , document.getElementById('root')
);
