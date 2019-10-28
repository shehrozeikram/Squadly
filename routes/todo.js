const express = require('express');
const todoController= require('../controllers/todo');

const router = express.Router();

router.post("/createTodo", todoController.createNewTodo);
// router.post("/updateColor", colorController.updateColor);

module.exports = router;