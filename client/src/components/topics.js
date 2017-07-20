import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTwitter, searchGoogleNews, searchYouTube } from '../actions';

class Topics extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event) {
		event.preventDefault();
		let term = event.target.children[0].value
		console.log('this', this);

		this.props.searchTwitter(term);
		this.props.searchGoogleNews(term);
		this.props.searchYouTube(term);
		
	}

	renderButtons() {
		let topics = [
			'Donald Trump', 'Tesla', 'United States Senate', 'Iran', 'Minneapolis', 'North Korea',
			'Game of Thrones', 'Conor McGregor', 'Russia', 'Google'
		]
		return topics.map(topic => {
			return (
			<form onSubmit={this.onFormSubmit}>
				<button type="submit" value={topic}>{topic}</button>
			</form>
			)
		})
	}

	render() {
		return (
			<div>
				{this.renderButtons()}
			</div>
		)
	}
}


export default connect(null, { searchTwitter, searchGoogleNews, searchYouTube })(Topics);