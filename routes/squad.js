const express = require('express');
const squadController = require('../controllers/squads');

const router = express.Router();

router.post("/createSquad", squadController.createNewSquad);
router.post("/updateSquad", squadController.updateSquad);
router.post("/addSquadMember", squadController.addNewSquadMember);
router.post("/removeSquadMember", squadController.removeSquadMember);

module.exports = router;