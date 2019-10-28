const express = require('express');
const jobTaskController = require('../controllers/jobTasks');

const router = express.Router();

router.post("/createJobTask", jobTaskController.createNewJobTask);
router.post("/updateJobTask", jobTaskController.updateJobTask);

module.exports = router;