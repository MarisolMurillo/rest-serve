const { response, request } = require('express')

const isRole = (...roles) => {
  return (req = request, res = response, next) => {
    if (!req.authenticatedUser) {
      return res.status(404).json({
        msg: 'Se requiere verificar el rol sin permiso validar el token',
      })
    }

    if (!roles.includes(req.authenticatedUser.role)) {
      return res.status(401).json({
        msg: `El servicio requiere uno de estos roles: ${roles}`,
      })
    }

    next()
  }
}
module.exports = {
  isRole,
}
