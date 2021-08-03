const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    text: {

        type: String,
        required: true,
        min: 6,
        max: 255

    },
    completed: {

        type: Boolean,
        required: true,

    },
    date: {

        type: Date,
        default: Date.now()

    }

});

module.exports = mongoose.model('Todo', todoSchema);