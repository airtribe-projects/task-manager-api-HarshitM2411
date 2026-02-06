const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controller/controller.js');

// get all tasks
router.get('/', getAllTasks);

// get task by id
router.get('/:id', getTaskById);

// create a new task
router.post('/', createTask);

// update a task
router.put('/:id', updateTask);

// delete a task
router.delete('/:id', deleteTask);

module.exports = router;