const tasks = require('../task.json').tasks;

const getAllTasks = (req, res) => {
    const completed = req.query.completed;
    const sorting = req.query.sorting;

    if (completed !== undefined) {
        const filteredTasks = tasks.filter((t) => t.completed === (completed === 'true'));
        return res.status(200).send(filteredTasks);
    }

    if (sorting) {
        const asc = sorting.toLowerCase() === 'asc';
        const sortedTasks = [...tasks].sort((a, b) => asc ? new Date(a.completionDate) - new Date(b.completionDate) : new Date(b.completionDate) - new Date(a.completionDate));
        return res.status(200).send(sortedTasks);
    }

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

const getTaskByPriority = (req, res) => {
    const priority = req.params.priority;
    const filteredTasks = tasks.filter((t) => t.priority.toLowerCase() === priority.toLowerCase());
    res.status(200).send(filteredTasks);
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
        priority: payload.priority || 'low',
        completionDate: payload.completionDate || new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // if date not present set it to 10 days from now
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
        task.priority = payload.priority || task.priority;
        task.completionDate = payload.completionDate || task.completionDate;
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
    getTaskByPriority,
    createTask,
    updateTask,
    deleteTask
};