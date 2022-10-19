const { Schema, model } = require('mongoose')

const UserScheman = Schema({
  name: {
    type: String,
    required: [true, 'El nombre es Obligatorio'],
  },
  email: {
    type: String,
    required: [true, 'El email es Obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'El nombre es requerida'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: [true, 'El rol es Obligatorio'],
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  status: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
})

module.exports = model('users', UserScheman)
