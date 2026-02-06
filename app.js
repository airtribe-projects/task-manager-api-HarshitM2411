const express = require('express');
const logger = require('./logger/logger.js');
const tasksRoute = require('./router/tasksRoute.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(logger);

//mounting a route
app.use('/tasks', tasksRoute);


app.get('/', (req, res) => {
    res.status(200).send('Welcome to Task Manager API');
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

module.exports = app;