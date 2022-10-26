const { Router } = require('express')
const { check } = require('express-validator')
const { login } = require('../controllers/auth.controller')

const { emailExist } = require('../helpers/db-validators')
const { validateFields } = require('../middlewares/validate-fields')

const router = Router()

router.post(
  '/login',
  [
    check('email', 'el email es requerido').not().isEmpty(),
    check('password', 'la contraseña es obligatorio').not().isEmpty(),
    validateFields,
  ],
  login
)

module.exports = router
