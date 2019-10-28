const express = require('express');
const chatController= require('../controllers/chat');

const router = express.Router();

router.post("/createchat", chatController.createNewChat);
// router.post("/updateColor", colorController.updateColor);

module.exports = router;