const Services = require('../models/service');
const About = require("../models/about");
const Clints = require('../models/clints');

exports.getMainPage = async (req, res) => {
    const clints = await Clints.find();
    const clintsImgs = clints[0].imgs;
    res.render('main/index', {
        clints: clintsImgs
    })
}
exports.getContent = async (req, res) => {
    const about = await About.findOne();
    const servs = await Services.find();
    const clints = await Clints.find();
    res.status(200).json({
        about: about,
        servs: servs,
        clints: clints
    })
}