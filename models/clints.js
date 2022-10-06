const mongoose = require('mongoose');
const clintSchema = mongoose.Schema({
    imgs: [String]
})
module.exports = mongoose.model('Clint', clintSchema);