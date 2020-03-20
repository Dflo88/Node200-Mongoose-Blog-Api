const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {type: String, required: true},
    article: {type: String, required: true},
    published: {type: Date, default: Date.now, required: true},
    featured: {type: Boolean, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'}
    // mongoose.ObjectId
});

module.exports = mongoose.model('Blog', blogSchema);