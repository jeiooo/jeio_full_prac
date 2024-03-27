const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo_Info = new Schema ({
    text: {
        type: String,
        required: true 
    },
    complete: {
        type: Boolean,
        default: false 
    },
    timestamp: {
        type: String,
        default: Date.now()
    }

});

const Todo = mongoose.model('todo_full', Todo_Info);
module.exports = Todo;