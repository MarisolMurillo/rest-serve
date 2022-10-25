const { Router } = require('express')
const express = require('express')
const { validateFields } = require('../middlewares/validate-fields')
const {
  isValidRole,
  emailExist,
  userByIdExists,
} = require('../helpers/db-validators')
const { check } = require('express-validator')
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUsersById,
} = require('../controllers/user.controller')

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUsersById)

router.post(
  '/',
  [
    check('name', 'el nombre es requerido').not().isEmpty(),
    check('email', 'el email es requerido').not().isEmpty(),
    check('email', 'el correo no es válido').isEmail(),
    check('email').custom(emailExist),
    check('password', 'la contraseña es obligatorio').not().isEmpty(),
    check(
      'password',
      'la contraseña debe de tener 6 caracteres o más'
    ).isLength({
      min: 6,
    }),
    check('role', 'el rol es requrido').not().isEmpty(),
    check('role').custom(isValidRole),

    validateFields,
  ],
  createUser
)

router.put(
  '/:id',
  [
    check('id', 'El ID no es valido').isMongoId(),
    check('id').custom(userByIdExists),
    validateFields,
  ],
  updateUser
)

router.delete(
  '/:id',
  [
    check('id', 'El ID no es valido').isMongoId(),
    check('id').custom(userByIdExists),
    validateFields,
  ],
  deleteUser
)

module.exports = router
