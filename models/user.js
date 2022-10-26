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
    //enum: ['ADMIN_ROLE', 'USER_ROLE'],
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

UserScheman.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject()
  user.id = _id
  return user
}

module.exports = model('users', UserScheman)
