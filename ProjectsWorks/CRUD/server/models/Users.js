//this is a model which specify the fiels for a users tables
const mongoose = require('mongoose')

//schemas
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel