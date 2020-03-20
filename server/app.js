const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

mongoose.connect('mongodb://localhost/my-blog', {useMongoClient : true});
mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('hello worl ');
});

app.use('/api/users', require('./routes/users.js'))

app.use('/api/blogs', require('./routes/blogs.js'))

module.exports = app;