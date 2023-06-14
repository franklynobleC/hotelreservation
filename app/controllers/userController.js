const { StatusCodes } = require('http-status-codes')
const UserModel = require('../model/User')

const updateUser = async (req, resp) => {
  console.log('udpate User')
}

const deletUser = async (req, resp) => {
  console.log('delet user')
}

const getAllUsers = async (req, resp) => {
  console.log('all users')
}

const getSingleUser = async (req, res) => {
  console.log('single User')
}
module.exports = {
  createUser,
  updateUser,
  deletUser,
  getAllUsers,
  getSingleUser
}
