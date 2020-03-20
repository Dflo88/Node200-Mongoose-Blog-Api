const express = require('express');
const router = express.Router();
const Blog = require('../../models/Blog');
const User = require('../../models/User');

router.route('/')
    .get((req, res) => {
        Blog
            .find()
            .then(blogs => {
                res.status(200).send(blogs);
            });
    })
    .post((req, res) => {
        let dbUser = null;
        User
            .findById(req.body.author)
            .then(user => {
                dbUser = user;
                const newBlog = new Blog(req.body);
                newBlog.author = user._id;
                return newBlog.save();
            })
            .then(blog => {
                dbUser.blogs.push(blog);
                dbUser.save().then(() => res.status(200).json(blog))
            })
    })

router.route('/:id')
    .get((req, res) => {
        Blog
            .findById(req.params.id)
            .then(blog => {
                res.status(200).json(blog);
            })
    })
    .put((req, res) => {
        Blog
            .findByIdAndUpdate(req.params.id, req.body, { new: true})
            .then(updatedBlog => {
                res.status(200).json(updatedBlog)
            })
    })
    .delete((req, res) => {
        Blog
            .findByIdAndRemove(req.params.id)
            .then(deletedBlog => {
                res.status(200).json(deletedBlog)
            })
    })

router.route('/featured')
    .get((req, res) => {
        Blog
            .where({'featured':true})
            .then(blogs => {
                res.status(200).json(blogs)
            })
    })

module.exports = router;