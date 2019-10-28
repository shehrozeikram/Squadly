const express = require('express');
const eventsController= require('../controllers/events');

const router = express.Router();

router.post("/createEvents", eventsController.createNewEvents);
router.post("/updateEvents", eventsController.updateEvents);

module.exports = router;