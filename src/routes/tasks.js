const router = require('express').Router()
const {getTasks, createTask, getTaskById, updateTask, deleteTask} = require('../controllers/taskController')

router.route('/').get(getTasks)
router.route('/create').post(createTask)
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask)

module.exports = router