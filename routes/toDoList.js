const express = require('express');
const toDoListController= require('../controllers/toDoLists');

const router = express.Router();

router.post("/createToDoList", toDoListController.createToDoList);
router.post("/updateToDoList", toDoListController.updateToDoList);

module.exports = router;