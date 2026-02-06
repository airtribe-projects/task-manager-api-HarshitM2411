const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById, getTaskByPriority, createTask, updateTask, deleteTask } = require('../controller/controller.js');

// get all tasks
router.get('/', getAllTasks);

// get task by id
router.get('/:id', getTaskById);

// get task by priority
router.get('/priority/:priority', getTaskByPriority);

// create a new task
router.post('/', createTask);

// update a task
router.put('/:id', updateTask);

// delete a task
router.delete('/:id', deleteTask);

module.exports = router;