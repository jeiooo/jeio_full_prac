const express = require('express');
const router = express();

const Todo = require('../models/todo.model');

//get all
router.get('/', async (req, res, next) => {
    try {
        const todo = await Todo.find();
        res.send(todo);
    } catch (error) {
        res.send(error.message);
    }
});

//post
router.post('/new', async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        const result = await todo.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//get specific
router.get('/complete/:id', async (req, res, send) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        todo.complete = !todo.complete;
        todo.save();
        res.send(todo)
    } catch (error) {
        res.send(error);
    }
});

//delete
router.delete('/delete/:id', async (req, res, send) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findByIdAndDelete(id);
        res.send(todo);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;