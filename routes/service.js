const express = require('express');
const serviceController= require('../controllers/service');

const router = express.Router();

router.post("/createService", serviceController.createNewService);
router.post("/updateService", serviceController.updateService);

module.exports = router;