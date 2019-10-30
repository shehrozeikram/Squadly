const express = require('express');
const colorController= require('../controllers/colors');

const router = express.Router();

router.post("/createColor", colorController.createNewColor);
router.post("/updateColor", colorController.updateColor);

module.exports = router;