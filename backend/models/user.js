// import { Schema } from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'users',
  timestamps: true
});

userSchema.plugin(uniqueValidator, { message: 'Email already exists'})
const User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);