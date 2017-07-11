import React, { Component } from 'react';
import { twitterMagic } from './twitter_magic';

//----------------------------------------
import { arrayOEmbedRequest } from '../actions/';




//--------------------------------------------

class TweetList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {}

	}

	componentDidMount() {
		arrayOEmbedRequest([ 'https://publish.twitter.com/oembed?url=https://twitter.com/thugsRbadMK/status/884171918798147584',
  'https://publish.twitter.com/oembed?url=https://twitter.com/TylerHu99890202/status/884171918617698305',
  'https://publish.twitter.com/oembed?url=https://twitter.com/marcylauren/status/884171918450069504',
  'https://publish.twitter.com/oembed?url=https://twitter.com/AlbaneseJoe/status/884171918408069120',
  'https://publish.twitter.com/oembed?url=https://twitter.com/cyndi_obrion/status/884171918299058178',
  'https://publish.twitter.com/oembed?url=https://twitter.com/Anna_Tweeterowa/status/884171918299025409',
  'https://publish.twitter.com/oembed?url=https://twitter.com/crisp_aw/status/884171918210936834',
  'https://publish.twitter.com/oembed?url=https://twitter.com/SheilaPettifor2/status/884171918206791680',
  'https://publish.twitter.com/oembed?url=https://twitter.com/KateWalter12/status/884171918198419461',
  'https://publish.twitter.com/oembed?url=https://twitter.com/preferscleanH2O/status/884171918131183616' ])
		.then(response => {
			this.setState({tweets: response})
			twitterMagic();
			console.log(typeof this.state.tweets[0].html);
		});
	}



	render() {
		// embedObj is what is returned from the Twitter API. it contains the html for a tweet to be rendered. It also has a script tag.
		let embedObj = {"url":"https:\/\/twitter.com\/thugsRbadMK\/status\/884171918798147584","author_name":"Eddie Muddy","author_url":"https:\/\/twitter.com\/thugsRbadMK","html":"\u003Cblockquote class=\"twitter-tweet\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EAustralian Journalist&#39;s Devastating Take On Trump At G-20 Goes Viral \u003Ca href=\"https:\/\/t.co\/CUn4WN73lh\"\u003Ehttps:\/\/t.co\/CUn4WN73lh\u003C\/a\u003E\u003C\/p\u003E&mdash; Eddie Muddy (@thugsRbadMK) \u003Ca href=\"https:\/\/twitter.com\/thugsRbadMK\/status\/884171918798147584\"\u003EJuly 9, 2017\u003C\/a\u003E\u003C\/blockquote\u003E\n\u003Cscript async src=\"\/\/platform.twitter.com\/widgets.js\" charset=\"utf-8\"\u003E\u003C\/script\u003E","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"https:\/\/twitter.com","version":"1.0"}
		//  simpleEmbedObj is the object without the script tag
		let simpleEmbedObj = {"url":"https:\/\/twitter.com\/thugsRbadMK\/status\/884171918798147584","author_name":"Eddie Muddy","author_url":"https:\/\/twitter.com\/thugsRbadMK","html":"\u003Cblockquote class=\"twitter-tweet\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EAustralian Journalist&#39;s Devastating Take On Trump At G-20 Goes Viral \u003Ca href=\"https:\/\/t.co\/CUn4WN73lh\"\u003Ehttps:\/\/t.co\/CUn4WN73lh\u003C\/a\u003E\u003C\/p\u003E&mdash; Eddie Muddy (@thugsRbadMK) \u003Ca href=\"https:\/\/twitter.com\/thugsRbadMK\/status\/884171918798147584\"\u003EJuly 9, 2017\u003C\/a\u003E\u003C\/blockquote\u003E\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"https:\/\/twitter.com","version":"1.0"}
		// direct is copy pasted console log of simpleEmbedObj.html It says class instead of className, but I figure I can change that when needed.
		let direct = <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Australian Journalist&#39;s Devastating Take On Trump At G-20 Goes Viral <a href="https://t.co/CUn4WN73lh">https://t.co/CUn4WN73lh</a></p>&mdash; Eddie Muddy (@thugsRbadMK) <a href="https://twitter.com/thugsRbadMK/status/884171918798147584">July 9, 2017</a></blockquote>
		// tweet is just like direct except it has className and the script tag. 
		let tweet = <div><blockquote className="twitter-tweet"><p lang="en" dir="ltr">Australian Journalist&#39;s Devastating Take On Trump At G-20 Goes Viral <a href="https://t.co/CUn4WN73lh">https://t.co/CUn4WN73lh</a></p>&mdash; Eddie Muddy (@thugsRbadMK) <a href="https://twitter.com/thugsRbadMK/status/884171918798147584">July 9, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script></div>
		let quotes = <div> HI </div>
		// console.log('this.state.tweets[0].html', this.state.tweets[0].html)
		console.log('embedObj.html', embedObj.html);
		console.log('simpleEmbedObj.html', simpleEmbedObj.html);

		if (!this.state.tweets) {
			return <div>Loading</div>
		}
		else {
			let htmltext = this.state.tweets[0].html
			console.log('htmltext', htmltext);
			console.log(typeof tweet);
			console.log(Object.keys(tweet))
			console.log(tweet.props)
			return simpleEmbedObj.html
		}

	}
}

export default TweetList

