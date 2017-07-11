import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetList from './components/tweet_list';
import SearchBar from './components/search_bar';

class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
        <TweetList />
      </div>
    );
  }
}

export default App;
