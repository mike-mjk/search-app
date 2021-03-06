const path = require('path');
const express = require('express');

const GoogleNews = require('./google_news');
const Twitter = require('./twitter');

const app = express();

// API endpoints go here!
app.get('/api/searchGoogleNews', function(req, res) {
  GoogleNews.searchGoogleNews(req, res, req.query.term)
  // res.send('response');

})


app.get('/api/searchtwitter', function(req, res) {
  Twitter.searchTweets(req, res, req.query.term)
  .then(tweets => {
    let string = Twitter.makeTweetUrlArray(tweets.statuses);
    // console.log(string);
    // console.log('tweets', tweets.statuses.length);
    res.json(string)
  })

})

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(port=3001) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      resolve();
    }).on('error', reject);
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
