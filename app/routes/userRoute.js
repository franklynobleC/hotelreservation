const express = require('express')
const router = express.Router()

const {

  updateUser,

  getAllUsers,
  getSingleUser
} = require('../controllers/userController')
const { get } = require('http')

router.route('/showMe', createUser).get()

router.route('updateUser', updateUser).patch()
router.route('getAllUsers', getAllUsers).get()
router.route('/:id', getSingleUser).get()
