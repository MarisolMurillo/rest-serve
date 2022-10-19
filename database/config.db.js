const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    mongoose.connect(
      process.env.MONGODB_CNN,
      { useNewUrlParser: true },
      (err, res) => {
        if (err) throw err
        console.log('Base de datos online')
      }
    )
  } catch (error) {
    console.log(error)

    throw new Error('Error en las conexión de la base de dactos ')
  }
}

module.exports = {
  dbConnection,
}
