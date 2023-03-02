const mongoose = require('mongoose');

const scanResultSchema = new mongoose.Schema({
    dateScaning: {
        type: Date,
        required: true,
    },
    region: {
        type: Number,
        required: true,
    },
    ASNumbers: {
        type: Array,
        required: true,
    },
    ASNumbersCome: {
        type: Array,
        required: true,
    },
    ASNumbersGone: {
        type: Array,
        required: true,
    },
  });

module.exports = mongoose.model('scanResult', scanResultSchema);
