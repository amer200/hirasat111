const express = require('express');
const route = express.Router();
const adminControllers = require('../controllers/admin');
const isAdmin = require('../middlewares/auth').isAdmin;

route.get('/', isAdmin, adminControllers.getMainPage);
route.post('/about', isAdmin, adminControllers.postAbout);
route.post('/services', isAdmin, adminControllers.postServ);
route.post('/clints', isAdmin, adminControllers.postClints);
route.get('/login', adminControllers.getLogin);
route.post('/login', adminControllers.postLogin);
route.get('/signout', isAdmin, adminControllers.signOut);
module.exports = route;