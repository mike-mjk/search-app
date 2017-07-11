import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetList from './components/tweet_list';

class App extends Component {
  render() {
    return (
      <div>
        <TweetList />
      </div>
    );
  }
}

export default App;
