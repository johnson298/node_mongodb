const express = require('express');
const router = require("express-promise-router")();
const UserController = require('../controllers/UserController');

router.route('/')
    .get(UserController.get)             
    .post(UserController.create);

router.route('/:userId')
    .get(UserController.getById)
    .put(UserController.replaceUser)
    .patch(UserController.updateUser)
    .delete(UserController.remove);

router.route('/:userId/decks')
    .get(UserController.getUserDeck)
    .post(UserController.createUserDeck)

module.exports = router;