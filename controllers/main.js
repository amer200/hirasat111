const Services = require('../models/service');
const About = require("../models/about");
const Clints = require('../models/clints');
const nodeMail = require('nodemailer')

async function mainMail(name, email, subject, message) {
    const transporter = await nodeMail.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.PASSWORD,
        },
    });
    const mailOption = {
        from: process.env.GMAIL_USER,
        to: process.env.EMAIL,
        subject: subject,
        html: `You got a message from 
      Email : ${email}
      Name: ${name}
      Message: ${message}`,
    };
    try {
        await transporter.sendMail(mailOption);
        console.log(mailOption);
        return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
}
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
exports.contactUs = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const msg = req.body.msg;
    mainMail(name, email, subject, msg)
        .then(resu => {
            res.status(200).json({
                msg: 'ok'
            })
        })
        .catch(err => {
            console.log(err)
        })
}