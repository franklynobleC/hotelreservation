const mongoose = require('mongoose')
const Schema = mongoose.Schema



// Define  user Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
required: true
},
})
