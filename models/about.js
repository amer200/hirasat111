const mongoose = require('mongoose');
const aboutSchema = mongoose.Schema({
    en: String,
    ae: String
})

module.exports = mongoose.model('About', aboutSchema);