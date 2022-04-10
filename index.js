const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

//model 
const db = require('./config/mongooes');
const Todo = require('./models/todo');

//controller
const homeController = require('./controller/homeController');

app.use(express.urlencoded());
app.use(express.static('assets'));

//view
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    Todo.find({},function(err,todo){
        if(err){
            console.log('error in fatching from db');
            return;
        }

        return res.render('index',{ 
            title : "TODO APP",
            todo : todo
        });
    })
})

app.get('/delete-task',function(req,res){
    //find okok but aur kiya to do teen??  apne aap ho jayega? ok
    for(var prop in req.query){
        Todo.findByIdAndDelete(prop,function(err){
            if(err){
                console.log('error in deleting an object from database');
                return;
            }
        })
    }
    return res.redirect('back');
})

app.post('/add-task',function(req,res){
    Todo.create({
        textarea : req.body.textarea,
        todo : req.body.todo,
        date : req.body.date,
    },function(e,todo){
        if(e){
            console.log('error in creating contact')
            return;
        }
        console.log(todo);
        return res.redirect('back');
    })
})

app.listen(port,function(err){
    if(err){
        console.log(`Server Error : ${err}`)
        return;
    }
    console.log('server is started');
})