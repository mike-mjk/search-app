import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetList from './components/tweet_list';
import SearchBar from './components/search_bar';
import GNews from './components/g_news';
import YouTube from './components/youtube';
import Topics from './components/topics';

class App extends Component {
  render() {
    return (
      <div className="row">
      	<SearchBar />
        <Topics />
      	<YouTube />
      	<GNews />
        <TweetList />
      </div>
    );
  }
}

export default App;
