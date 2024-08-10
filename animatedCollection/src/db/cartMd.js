const mongoose = require("mongoose")
const database = require('./db.js')

console.log(database)


mongoose.connect(database)

    .then(() => {
        console.log("Conectado a la base de datos")
    })
    .catch(error => {
        console.error("Error al conectar con la base de datos", error)
    })


module.exports = mongoose