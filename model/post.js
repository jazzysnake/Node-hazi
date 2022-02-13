const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Post = db.model('Post', {
    title: String,
    rating: {
        type:Number,
        min: 1,
        max: 10,
    },
    roast: String,
    drinktype: String,
    desc: String,
    _author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Post;