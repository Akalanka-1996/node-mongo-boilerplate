const asyncHandler = require('express-async-handler')
const Task = require('../models/task.model')

// get all tasks

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

// create a task

const createTask = asyncHandler(async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const task = new Task({
            name
        })

        const createdTask = await task.save()

        res.status(201).json(createdTask)
    }
})

module.exports = {getTasks, createTask}