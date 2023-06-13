const { timeStamp } = require('console')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define  user Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  Password: {
    type: String,
    required: String
  },
  reservations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reservation'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', UserSchema)
