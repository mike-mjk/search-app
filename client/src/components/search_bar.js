import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTwitter, searchGoogleNews, searchYouTube } from '../actions';
// import { searchGoogleNews } from '../actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);

		this.state = {
			term: ''
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		let { term } = this.state
		if (term !== '') {
			console.log('this', this);
			this.props.searchTwitter(term);
			this.props.searchGoogleNews(term);
			this.props.searchYouTube(term);
		}
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input
						value={this.state.term}
						onChange={event => this.setState({term: event.target.value})}
						placeholder="Search stuff"
					/>
				</div>
				<div>
					<button type="submit">Search</button>
				</div>
			</form>
		)
	}
}

export default connect(null, { searchTwitter, searchGoogleNews, searchYouTube })(SearchBar);