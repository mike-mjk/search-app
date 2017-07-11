import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTwitter } from '../actions';

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
		if (this.state.term !== '') {
			this.props.searchTwitter(this.state.term);
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

export default connect(null, { searchTwitter })(SearchBar);