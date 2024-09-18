const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    profile: {
        type: String
    },
    id: {
        type: String
    },
    provider: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password:{
        type: String
    },
    phone: {
        type: String
    },
    country: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User