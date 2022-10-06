const mongoose = require('mongoose');
const servSchema = mongoose.Schema({
    en: {
        title: String,
        txt: String
    },
    ar: {
        title: String,
        txt: String
    }

})

module.exports = mongoose.model('Servs', servSchema)