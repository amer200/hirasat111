const express = require('express');
const route = express.Router();
const mainControllers = require('../controllers/main');


route.get('/', mainControllers.getMainPage);
route.get('/content', mainControllers.getContent);

module.exports = route;