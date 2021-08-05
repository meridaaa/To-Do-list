const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const Task = require('./model/task')

app.use(bodyParser.urlencoded({
  extended: true
}));
 
// parse application/json
app.use(express.json());
app.use(bodyParser.json())

const DB = require('./config/key').MongoURI

mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoose....'))
  .catch(err => console.log(err))

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/views' ))

app.get('/', async(req, res) => {
    // const task = req.body
    // const newTask = new Task(req.body);
    //     newTask
    //       .save()
    //       .then(user => {
    //         console.log('Added!');
    //         console.log(newTask)
    //         // req.flash('success_msg', 'Student has been added.')
    //         res.render('index.ejs')
    //         // res.redirect('/users/addStudent');
    //       })
    //     //   .catch(err => console.log(err));
    //   }
    const tasks = await Task.find({})
res.render('index.ejs', {tasks: tasks})
    // Task.create(req.body)
    // res.render('index.ejs')
    // res.send('hi')
})

// var todoList = Task.
app.use(bodyParser.urlencoded({
  extended: true
}));
 
// parse application/json
app.use(bodyParser.json())
app.post('/newToDo', async(req, res, next) => {
    // const Tasks = Task.find();
    // Tasks.push(req.body)
    console.log(req.body)
    // await Task.find({}).then(tasks => {
    //     console.log(tasks)
    //     console.log(tasks.task);
    //     tasks.task.push(req.body)
    //     tasks.save()
    // }).catch(err => {console.log(err);
    // })
     const newTask = new Task(req.body);
    //  const newTask = await Task.create(req.body);
        newTask
          .save()
          .then(user => {
            console.log('Added!');
            console.log(newTask)
            // req.flash('success_msg', 'Student has been added.')
            // const tasks =Task.find({})
            res.redirect('/')
            
            // res.redirect('/users/addStudent');
          })
          .catch(err => console.log(err));
    //   }
    // rw
})

const PORT = process.env.port || 4000
app.listen(PORT, console.log(`server started at ${PORT}`))