const axios = require('axios');
const Feed = require('rss-to-json');



exports.searchGoogleNews = function(req, res, term) {
  // axios.get('https://news.google.com/news', {params: {q: term, output: 'rss'}})
  // .then(response => {
	const termWithPlusForSpace = term.replace(' ', '+');
	Feed.load('https://news.google.com/news?q='+ termWithPlusForSpace + '&output=rss', function(err, rss) {
		console.log(rss)
		res.json(rss)
	})
}