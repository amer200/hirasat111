require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const db = process.env.DB;



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