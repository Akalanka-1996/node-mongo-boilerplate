const router = require('express').Router()
const {getTasks} = require('../controllers/taskController')

router.route('/').get(getTasks)

module.exports = router