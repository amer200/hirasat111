require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const db = process.env.DB;

/********************************************************************* */
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
/********************************************************************* */
//routes
const mainRoutes = require('./routes/main');
/********************************************************************* */

app.use('/', mainRoutes);

mongoose.connect(db)
    .then(resu => {
        console.log('db conected')
        app.listen(port, () => {
            console.log(`app on port : ${port}`)
        })
    })
    .catch(err => {
        console.log(err)
    })