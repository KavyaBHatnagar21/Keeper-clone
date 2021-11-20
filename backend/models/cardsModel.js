const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
})

module.exports = mongoose.model('Cards', cardSchema)
