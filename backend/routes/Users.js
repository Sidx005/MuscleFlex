const express = require('express');
const { signUp, loginUser, users } = require('../Controllers/userController');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signUp); // Changed from '/signin' to '/signup' for consistency
router.get('/users', users);    // Changed from '/signin' to '/users' to make it more meaningful

module.exports = router;
