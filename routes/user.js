const express = require('express');
const userController= require('../controllers/users');

const router = express.Router();

router.post("/signup", userController.signup);
router.get("/login", userController.login);

module.exports = router;