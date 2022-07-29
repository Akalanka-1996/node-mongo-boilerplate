const asyncHandler = require('express-async-handler')
const Task = require('../models/task.model')

// get all tasks

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

module.exports = {getTasks}