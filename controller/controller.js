const tasks = require('../task.json').tasks;

const getAllTasks = (req, res) => {
    res.status(200).send(tasks);
}

const getTaskById = (req, res) => {
    const taskId = Number.parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
        res.status(200).send(task);
    } else {
        res.status(404).send({ message: 'Task not found' });
    }
}

const createTask = (req, res) => {
    const payload = req.body;

    if (!payload.title || !payload.description || payload.completed === undefined) {
        return res.status(400).send({ message: 'Invalid task data' });
    }

    const newTask = {
        title: payload.title,
        description: payload.description,
        completed: payload.completed,
    }

    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    res.status(201).send(newTask);
}

const updateTask = (req, res) => {
    const payload = req.body;
    const taskId = Number.parseInt(req.params.id);

    if (typeof payload.completed !== 'boolean') {
        return res.status(400).send({ message: 'Invalid task data' });
    }

    const task = tasks.find((t) => t.id === taskId);

    if (task) {
        task.title = payload.title || task.title;
        task.description = payload.description || task.description;
        task.completed = payload.completed || task.completed;
        res.status(200).send(task);
    } else {
        res.status(404).send({ message: 'Invalid Task ID' });
    }
}

const deleteTask = (req, res) => {
    const taskIdx = tasks.findIndex((t) => t.id === Number.parseInt(req.params.id));

    if (taskIdx !== -1) {
        tasks.splice(taskIdx, 1);
        res.status(200).send({ message: 'Task deleted successfully' });
    } else {
        res.status(404).send({ message: 'Invalid Task ID' });
    }

}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};