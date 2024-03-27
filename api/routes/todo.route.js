const express = require('express');
const router = express();

const Todo = require('../models/todo.model');

//get all
router.get('/', async (req, res, next) => {
    try {
        const todo = await Todo.find();
        res.json(todo);
    } catch (error) {
        res.json(error.message);
    }
});

//post
router.post('/new', async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        const result = await todo.save();
        res.json(result);
    } catch (error) {
        res.json(error.message);
    }
});

//get specific
router.get('/complete/:id', async (req, res, send) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        todo.complete = !todo.complete;
        todo.save();
        res.json(todo)
    } catch (error) {
        res.json(error);
    }
});

//delete
router.delete('/delete/:id', async (req, res, send) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findByIdAndDelete(id);
        res.json(todo);
    } catch (error) {
        res.json(error);
    }
});


module.exports = router;