const mongoose = require('mongoose')

const preformerSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password: String
})

module.exports = mongoose.model('Preformer', preformerSchema)
