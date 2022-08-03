const asyncHandler = require('express-async-handler')
const Task = require('../models/task.model')

// get all tasks

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

// get task by id

const getTaskById = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (task) {
        res.json(task)
    } else {
        res.status(400).json({message:"Task not found"})
    }
})

// create a task

const createTask = asyncHandler(async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const task = new Task({
            user: req.user._id,
            name
        })

        const createdTask = await task.save()

        res.status(201).json(createdTask)
    }
})

// update a task

const updateTask = asyncHandler(async (req, res) => {
    const {name} = req.body

    const task = await Task.findById(req.params.id)

    if(task) {
        task.name = name

        const updatedTask  = await task.save()
        res.json(updatedTask)
    } else{
        res.status(404)
        throw new Error("Task not found")
    }
})

const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(task) {
        await task.remove()
        res.json({message: "Task removed!"})
    } else {
        res.status(404)
        throw new Error("Task not found")
    }
})

module.exports = {getTasks, createTask, getTaskById, updateTask, deleteTask}