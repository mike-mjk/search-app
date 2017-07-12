import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetList from './components/tweet_list';
import SearchBar from './components/search_bar';
import GNews from './components/g_news';

class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<GNews />
        <TweetList />
      </div>
    );
  }
}

export default App;
