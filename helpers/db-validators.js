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

const userByIdExists = async (id = '') => {
  const user = await User.findById(id)
  if (!user) {
    throw new Error(`El usuario con id ${id} no existe en la BD`)
  }
}

module.exports = {
  isValidRole,
  emailExist,
  userByIdExists,
}
