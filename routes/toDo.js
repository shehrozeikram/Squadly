const express = require('express');
const toDoController= require('../controllers/toDos');

const router = express.Router();

router.post("/createToDo", toDoController.createNewToDo);
router.post("/updateToDo", toDoController.updateToDo);
router.post("/removeToDo", toDoController.removeToDo);

module.exports = router;