const Role = require('../models/role')
const User = require('../models/user')

const isValidRole = async (role = '') => {
  const existsRole = await Role.findOne({ role })
  if (!existsRole) {
    throw new Error(`el rol ${role} no está registrado en la BD`)
  }
}

const emailExist = async (email = '') => {
  const user = await User.findOne({ email })
  if (user) {
    throw new Error(`Este correo ya está registrado; que buscate otro perro`)
  }
}
module.exports = {
  isValidRole,
  emailExist,
}
