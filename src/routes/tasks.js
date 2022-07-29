const router = require('express').Router()
const {getTasks, createTask, getTaskById} = require('../controllers/taskController')

router.route('/').get(getTasks)
router.route('/create').post(createTask)
router.route('/:id').get(getTaskById)

module.exports = router