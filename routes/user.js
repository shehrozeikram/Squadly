const express = require('express');
const userController= require('../controllers/users');

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/updateSignUp", userController.updateSignUp);
router.post("/login", userController.login);
router.post("/setAvailability", userController.setAvailability)
router.post("/updateSetAvailability", userController.updateSetAvailability);

module.exports = router;