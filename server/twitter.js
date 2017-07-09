const Twit = require('twit');
const T = new Twit({
  consumer_key:         'KDz7dflwZU89XF1sukmt5tQeC',
  consumer_secret:      'z9EbkvJCIHROrUuEv6OoKQ3Wzdw0r0fcawi6FGluCf4N7W9Iff',
  access_token:         '883185279833579520-YSrIdXYNfJ66Gvjx240Q356c8AZbHjI',
  access_token_secret:  'mSFZXdbRTioirZ8fMK975014Ix3fIePYB9uO6A5WaojHq',
  timeout_ms:           60*1000,
});


exports.searchTweets = function(req, res, term) {
	return new Promise((resolve, reject) => {
		T.get('search/tweets', { q: term, count: 10 }, function(err, data, response) {
		  // console.log(data.statuses[0]);
		  resolve(data);
		})
	})
}

exports.makeTweetUrlArray = function(statuses) {
	return statuses.map(status => {
		return `https://publish.twitter.com/oembed?url=https://twitter.com/${status.user.screen_name}/status/${status.id_str}`
	});
}


//before trying to implement Promise
// const Twit = require('twit');
// const T = new Twit({
//   consumer_key:         'KDz7dflwZU89XF1sukmt5tQeC',
//   consumer_secret:      'z9EbkvJCIHROrUuEv6OoKQ3Wzdw0r0fcawi6FGluCf4N7W9Iff',
//   access_token:         '883185279833579520-YSrIdXYNfJ66Gvjx240Q356c8AZbHjI',
//   access_token_secret:  'mSFZXdbRTioirZ8fMK975014Ix3fIePYB9uO6A5WaojHq',
//   timeout_ms:           60*1000,
// });


// exports.searchTweets = function(req, res, term) {
// 	T.get('search/tweets', { q: term, count: 10 }, function(err, data, response) {
// 	  // console.log(data.statuses[0]);
// 	  console.log('data in T.get', data);
// 	  return data;
// 	})
// }
