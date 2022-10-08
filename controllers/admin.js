const Services = require('../models/service');
const About = require("../models/about");
const Clints = require('../models/clints');

exports.getMainPage = async (req, res) => {
    const about = await About.findOne();
    const servs = await Services.find();
    const clints = await Clints.find();
    res.render('admin/index', {
        about: about,
        servs: servs,
        clints: clints
    })
}
exports.postAbout = (req, res) => {
    const arTxt = req.body.ar_txt;
    const enTxt = req.body.en_txt;
    About.findOne()
        .then(a => {
            a.en = enTxt;
            a.ar = arTxt;
            return a.save();
        })
        .then(a => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.postServ = (req, res) => {
    const arTitles = req.body.serv_title_ar;
    const enTitles = req.body.serv_title_en;
    const arTxts = req.body.serv_txt_ar;
    const enTxts = req.body.serv_txt_en;
    let services = [];
    let i = 0;
    if (typeof arTitles == 'string') {
        let serv = {
            en: {
                title: enTitles,
                txt: enTxts
            },
            ar: {
                title: arTitles,
                txt: arTxts
            }
        }
        services.push(serv)
    } else {
        for (i; i <= arTitles.length - 1; i++) {
            const serv = {
                en: {
                    title: enTitles[i],
                    txt: enTxts[i]
                },
                ar: {
                    title: arTitles[i],
                    txt: arTxts[i]
                }
            }
            services.push(serv)
        }
    }
    Services.deleteMany()
        .then(s => {
            return Services.insertMany(services)
        })
        .then(s => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.postClints = (req, res) => {
    const oldImgs = req.body.imgs;
    const newImgs = req.files;
    let imgs = [];
    if (oldImgs) {
        if (typeof oldImgs == 'string') {
            imgs.push(oldImgs)
        } else {
            imgs = [...oldImgs]
        }
    }
    if (newImgs) {
        newImgs.forEach(i => {
            imgs.push(i.path.split('public')[1])
        });
    }
    Clints.findOne()
        .then(c => {
            if (c) {
                c.imgs = imgs;
                return c.save();
            }
            const newC = new Clints({
                imgs: imgs
            })
            return newC.save();
        })
        .then(c => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.getLogin = (req, res) => {
    res.render('admin/login')
}
exports.postLogin = (req, res) => {
    const password = req.body.password;
    if (process.env.ADMINPWD == password) {
        req.session.user = true;
        res.redirect('/admin');
    } else {
        res.send('password wron !')
    }
}
exports.signOut = (req, res) => {
    req.session.destroy()
    res.redirect('/admin')
}