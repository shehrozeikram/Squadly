const express = require('express');
const businessController= require('../controllers/businesses');

const router = express.Router();

router.post("/createBusiness", businessController.createNewBusiness);
router.post("/updateBusiness", businessController.updateBusiness);
router.post("/addBusinessEmployee", businessController.addNewBusinessEmployee);
router.post("/removeBusinessEmployee", businessController.removeBusinessEmployee);

module.exports = router;