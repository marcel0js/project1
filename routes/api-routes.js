const db = require('../models');

module.exports = function (app) {
  app.get('/api/Tweet', function (req, res) {
    db.Tweet.find({})
      .then(function (tweets) {
        res.json(tweets);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/Tweet', function (req, res) {
    db.Tweet.create(req.body)
      .then(function (tweets) {
        res.json(tweets);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
 
  app.delete('/api/Tweet', function (req, res) {
    db.Tweets.delete(req.body)
      .then(function (tweets) {
        res.json(tweets);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
}