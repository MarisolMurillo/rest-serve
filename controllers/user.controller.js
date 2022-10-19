const {request, response} = require('express')

const getUsers = (req = request, res = response) => {
  //url/api/users/?name=Rachel&date=2022-02-29 -> query
  const { name, date } = req.query

req.res.status(200).json({
  msg: 'Get - controller',
  name,
  date,
}) 
  }

  const getUsersById = (req = request, res = response) => {
  //url/api/users/24 -> Segmento: el 24 entra en el id
const id = req.params.id
res.json({
  msg: 'Usuario por id - controller',
  id,
 })
}

const createUser = (req = request, res = response) => {
  //url//api//users/ -< body: es el objeto en json
  const {name, lastname, age} = req.body
  res.status(201).json({
    msg: 'post API - controller',
    name,
    lastname, 
    age, 
  })
}

const updateUser = (req = request, res = response) => {
  const id = req.params.id
  const body =req.body


  res.json({
    msg: 'put API - controller',
    id,
  })
}

const deleteUser = (req = request, res = response) => {
  const id = req.params
  res.status(201).json({
    msg: 'delete API - controller',
  })
}

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
}
