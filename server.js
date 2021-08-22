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

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

const DB = require('./config/key').MongoURI

mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoose....'))
  .catch(err => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views' ))

//routes
app.get('/', async(req, res) => {
    const tasks = await Task.find({})
res.render('index.ejs', {tasks: tasks})
})

app.post('/newToDo', async(req, res, next) => {
    console.log(req.body)
     const newTask = new Task(req.body);
        newTask
          .save()
          .then(user => {
            console.log('Added!');
            console.log(newTask)
            res.redirect('/')
          })
          .catch(err => console.log(err));
})

const PORT = process.env.port || 4000
app.listen(PORT, console.log(`server started at ${PORT}`))