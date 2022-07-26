const router = require('express').Router()
const {getTasks, createTask, getTaskById, updateTask, deleteTask} = require('../controllers/taskController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getTasks)
router.route('/').post(protect, createTask)
router.route('/:id').get(getTaskById).put(protect, updateTask).delete(protect, deleteTask)

module.exports = router