const { Schema, model } = require('mongoose')

const RoleScheman = Schema({
  role: {
    type: String,
    required: [true, 'El rol es obligatorio'],
  },
})

module.exports = model('roles', RoleScheman)
