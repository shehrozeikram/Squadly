const express = require('express');
const jobController = require('../controllers/jobs');

const router = express.Router();

router.post("/createJob", jobController.createJob);
router.post("/updateJob", jobController.updateJob);
router.post("/rescheduleJob", jobController.rescheduleJob);
router.post("/updateJobStatus", jobController.updateJobStatus);
router.post("/clockOn", jobController.clockOn);
router.post("/clockOff", jobController.clockOff);


module.exports = router;