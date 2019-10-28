const express = require('express');
const jobController = require('../controllers/jobs');

const router = express.Router();

router.post("/createJob", jobController.createJob);
router.post("/updateJob", jobController.updateJob);
router.post("/rescheduleJob", jobController.rescheduleJob);

module.exports = router;