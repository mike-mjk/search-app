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
			console.log('object.img', object.img)
			return (
				<div style={{boxShadow: '0 2px 6px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.04)', backgroundColor: '#fff', padding: '15px', marginBottom: '15px', width: '50%'}}>
					<li>
						<a href={object.url}><img style={{display: 'block', float: 'left', marginRight: '15px'}}src={object.img}/>{object.title}</a>
						<p>{object.outlet}</p>
					</li>
				</div>
			)
		})
	}
	render() {
		if (!this.props.googleNewsObject) {
			return <div></div>
		} else {
			return <ul style={{listStyle: 'none'}}>{this.renderGoogleNewsLinks()}</ul>
		}
		// return <div>GNews</div>
	}
}

function mapStateToProps(state) {
	return { googleNewsObject: state.googleNewsObject }
}

export default connect(mapStateToProps, { searchGoogleNews })(GNews) ;
