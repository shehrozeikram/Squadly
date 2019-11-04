const express = require('express');
const userController= require('../controllers/users');

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/setAvailability", userController.setAvailability)

module.exports = router;