const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Cards', cardSchema)
