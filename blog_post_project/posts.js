const mongoose = require('mongoose')

var Post = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String,
        max: 20,
        min: 6,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0,
    }
}))

module.exports = Post;