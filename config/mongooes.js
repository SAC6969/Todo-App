const mongooes = require('mongoose');

mongooes.connect('mongodb://localhost/todo_app');

const db = mongooes.connection;


db.on('error',console.error.bind(console,'error connecting to db'));


db.once('open',function(){
    console.log("Successfully connected to the database");
});