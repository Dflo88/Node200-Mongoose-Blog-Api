const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.route('/')
    .get((req,res) => {
        User
            .find()
            .then(users => {
                res.status(200).json(users)
            });
    })
    .post((req, res) => {
        User
                const newUser = new User(req.body);
                newUser.save()
                res.status(200).json(newUser)
    })
    
router.route('/:id')
    .get((req,res) => {
        User
            .findById(req.params.id)
            .then(users => {
                res.status(200).json(users)
            });
    })
    .put((req, res) => {
        User
            .findByIdAndUpdate(req.params.id, req.body, { new: true} )
            .then(updatedUser => {
                res.status(200).json(updatedUser)
            })
    })
    .delete((req, res) => {
        User
            .findByIdAndRemove(req.params.id)
            .then(deletedUser => {
                res.status(200).json(deletedUser)
            })
    })

module.exports = router;