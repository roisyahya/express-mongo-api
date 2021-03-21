const mongoose = require('mongoose')

const ApiSchema = mongoose.Schema({
    nama : {
        type: String,
        required : true
    },
    alamat : {
        type: String,
        required : true
    },
    tglTerdaftar : {
        type: Date,
        default : Date.now
    },
})

module.exports = mongoose.model('Api', ApiSchema)