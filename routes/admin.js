const express = require('express');
const route = express.Router();
const adminControllers = require('../controllers/admin');


route.get('/', adminControllers.getMainPage);
route.post('/about', adminControllers.postAbout);
route.post('/services', adminControllers.postServ);
route.post('/clints', adminControllers.postClints);
module.exports = route;