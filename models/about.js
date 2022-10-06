const mongoose = require('mongoose');
const aboutSchema = mongoose.Schema({
    en: String,
    ar: String
})

module.exports = mongoose.model('About', aboutSchema);