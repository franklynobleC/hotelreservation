const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

// Define  user Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
    minlength: 4,
    maxlength: 50
  },

  email: {
    type: String,
    unique: true,
    validator: validator.isEmail,
    required: [true, 'please provide email']
  },
  password: {
    type: String,
    required: [true, 'please provide password']
    // minlength: 6
  },

  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
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

UserSchema.pre('save', function (next) {
  this.save()
  next()
})

module.exports = mongoose.model('User', UserSchema)
