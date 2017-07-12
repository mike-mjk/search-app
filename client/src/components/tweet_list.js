import React, { Component } from 'react';
import { connect } from 'react-redux';
import { twitterMagic } from './twitter_magic';
import { searchTwitter } from '../actions'
// import { ReactDOMServer } from 'react-dom/server';
//don't forget if this doesn't work that this import statement is diff
// var HtmlToReactParser = require('html-to-react').Parser

class TweetList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {}

	}

	componentDidUpdate() {
		twitterMagic();
		if (window.twttr.widgets) {
			window.twttr.widgets.load();
		}
	}


	render() {
		// console.log('this.props.tweetHtml',this.props.tweetHtml);
		if (!this.props.tweetHtml[0]) {
			return <div></div>
		}
		else {
			let htmltext = this.props.tweetHtml[0]

			return <div style={{float: 'left'}} key={Math.random()} >{this.props.tweetHtml}</div>;
		}

	}
}

function mapStateToProps(state) {
	return { tweetHtml: state.tweetHtml }
}

export default connect(mapStateToProps, { searchTwitter })(TweetList) 

