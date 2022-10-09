const express = require('express');
const route = express.Router();
const mainControllers = require('../controllers/main');


route.get('/', mainControllers.getMainPage);
route.get('/content', mainControllers.getContent);
route.post('/contact', mainControllers.contactUs);

module.exports = route;