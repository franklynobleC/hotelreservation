const express = require('express')
const router = express.Router()

const {
  updateUser,

  getAllUsers,
  getSingleUser
} = require('../controllers/userController')

router.route('/').get(getAllUsers)

router.route('/:id').patch(updateUser)

router.route('/:id').get(getSingleUser)

module.exports = router
