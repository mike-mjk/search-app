import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGoogleNews } from '../actions';

class GNews extends Component {
	componentDidMount() {
		// let term = 'beyonce knowles';
		// this.props.searchGoogleNews(term);
	}

	renderGoogleNewsLinks() {
		return this.props.googleNewsObject.map(object => {
			return <li><a href={object.url}>{object.title}</a></li>
		})
	}
	render() {
		if (!this.props.googleNewsObject) {
			return <div></div>
		} else {
			return <ul>{this.renderGoogleNewsLinks()}</ul>
		}
		// return <div>GNews</div>
	}
}

function mapStateToProps(state) {
	return { googleNewsObject: state.googleNewsObject }
}

export default connect(mapStateToProps, { searchGoogleNews })(GNews) ;
