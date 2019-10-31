const express = require('express');
const eventController= require('../controllers/events');

const router = express.Router();

router.post("/createEvent", eventController.createNewEvent);
router.post("/updateEvent", eventController.updateEvent);
router.post("/removeEvent", eventController.removeEvent);


module.exports = router;