const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TweetSchema = new Schema({
  tweet: {
    type: String,
    required: "You must include a message"
  },
  username: {
    type: String,
    required: "You  must have a username"
  },
  date: {
      type: Date

  }
});


var Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;