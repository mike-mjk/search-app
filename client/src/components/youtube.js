import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

class YouTube extends Component {
	renderVideos() {
		const videos = this.props.youTubeVideos

		if(!videos) {
			return <div>Load</div>
		}

		return (
			_.map(videos, video => {
				let date = new Date(video.publishedAt);
				date = moment(date).format('MMM D, YY')
				return (
						<div className="row" style={{clear: 'both', backgroundColor: '#fff', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 6px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px', padding: '15px', marginBottom: '15px'}}>
							<a href={`https://www.youtube.com/watch?v=${video.id}`}><img className="col s5" style={{padding: '0'}} src={video.thumbnail} /></a>
							<div className="col s7">
								<a href={`https://www.youtube.com/watch?v=${video.id}`}>{video.title}</a>
								<p style={{marginBottom: '0'}}>{video.channelTitle} {date}</p>
							</div>
						</div>
				)
			})
		)
	}

	render() {
		return <div className="col xl4 youtube">{this.renderVideos()}</div>
	}
}

function mapStateToProps(state) {
	return { youTubeVideos: state.youTubeVideos }
}
export default connect(mapStateToProps, null)(YouTube);

