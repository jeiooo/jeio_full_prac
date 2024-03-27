const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const url = 'mongodb://localhost:27017/full_prac';
mongoose.connect(url, {})
    .then(result => console.log('Connected to DB... '))
    .catch(err => console.log(error));

const TodoRoute = require('./routes/todo.route');
app.use(('/todo'), TodoRoute);

app.listen(3000, () => {
    console.log('Connected to Port 3000... ')
});