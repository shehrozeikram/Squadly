const express = require('express');
const calendarController= require('../controllers/calendar');

const router = express.Router();

router.post("/createCalendar", calendarController.createNewCalendar);
router.post("/updateCalendar", calendarController.updateCalendar);

module.exports = router;