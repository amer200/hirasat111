const mongoose = require('mongoose');
const clintSchema = mongoose.Schema({
    img: String
})
module.exports = mongoose.model('Clint', clintSchema);