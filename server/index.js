const path = require('path');
const express = require('express');

const app = express();

const Twit = require('twit');
const T = new Twit({
  consumer_key:         'KDz7dflwZU89XF1sukmt5tQeC',
  consumer_secret:      'z9EbkvJCIHROrUuEv6OoKQ3Wzdw0r0fcawi6FGluCf4N7W9Iff',
  access_token:         '883185279833579520-YSrIdXYNfJ66Gvjx240Q356c8AZbHjI',
  access_token_secret:  'mSFZXdbRTioirZ8fMK975014Ix3fIePYB9uO6A5WaojHq',
  timeout_ms:           60*1000,
});
// API endpoints go here!
app.get('/api/searchtwitter', function(req, res) {
  T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data);
    res.json('Hi JSON')
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
