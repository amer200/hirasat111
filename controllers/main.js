const Services = require('../models/service');
const About = require("../models/about");
const Clints = require('../models/clints');

exports.getMainPage = (req, res) => {
    res.render('main/index')
}
exports.getContent = async (req, res) => {
    const about = await About.findOne();
    const servs = await Services.find();
    const clints = await Clints.find();
    console.log(servs)
    res.status(200).json({
        about: about,
        servs: servs,
        clints: clints
    })
}