const express = require('express');
const serviceController = require('../controllers/services');

const router = express.Router();

router.post("/createService", serviceController.createNewService);
router.post("/updateService", serviceController.updateService);

module.exports = router;