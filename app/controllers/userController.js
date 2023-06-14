const { StatusCodes } = require('http-status-codes')
const UserModel = require('../model/User')

const updateUser = async (req, resp) => {
  console.log('udpate User')

  resp.status(StatusCodes.OK).json({ update: 'update User' })
}

const getAllUsers = async (req, resp) => {
  console.log('all users')

  resp.status(StatusCodes.OK).json({ test: 'allUsers' })
}

const getSingleUser = async (req, resp) => {
  console.log('single User')
  //  console.log(resp)
  resp.status(StatusCodes.OK).json({ single: 'singleUser' })
}
module.exports = {
  updateUser,

  getAllUsers,
  getSingleUser
}
