const mongooes = require('mongoose');

const todoSchema = new mongooes.Schema({
    textarea: {
        type:String,
        required:true
    },
    todo: {
        type:String,
        required:true
    },
    date:{
        type:String,
        required: true
    }
})

const Todo = mongooes.model('Todo',todoSchema);
module.exports = Todo;