const mongoose = require('mongoose')

const Task = new mongoose.Schema({
    task: {
        type: String
    }
})

module.exports = mongoose.model('Task', Task)