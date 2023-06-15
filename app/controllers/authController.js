const { StatusCodes } = require('http-status-codes')
const User = require('../model/User')

const register = async (req, resp) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new Error('BadRequest')
    // resp.status(StatusCodes.BAD_REQUEST).json({BadRequest :"BadRequest"})
  }

  //check  if  email already Exist
  const findEmailExist = await User.findOne({ email: email })
  if (findEmailExist) {
    // throw new Error('email Already exist')
    resp.status(StatusCodes.BAD_REQUEST).json({ badRe: 'email already Exist' })
  }

  // first register user as an admin
  const FirstDocument = (await User.countDocuments({})) == 0

  if (FirstDocument) {
    // await (FirstDocument.role = 'admin')
//more optimized code/  role =   FirstDocument? 'admin':'user'

    uRole = User.role = 'admin'

    const createdUser = await User.create({
      name: name,
      email: email,
      password: password,
      role: uRole
    })

    resp.status(StatusCodes.OK).json({ User: createdUser })

    console.log(FirstDocument)
  } else {
    const createdUser = await User.create({
      name: name,
      email: email,
      password: password
    })

    resp.status(StatusCodes.OK).json({ User: createdUser })
  }
}

const login = async (req, resp) => {
  resp.status(StatusCodes.OK).json({ login: 'login' })
}

const logout = async (req, resp) => {
  resp.status(StatusCodes.OK).json({ logOut: 'logOut' })
}

module.exports = {
  register,
  login,
  logout
}
