const router = require('express').Router()
const {getTasks, createTask} = require('../controllers/taskController')

router.route('/').get(getTasks)
router.route('/create').post(createTask)

module.exports = router