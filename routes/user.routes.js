const { Router } = require('express')
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

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router
