const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config();


const mongo_uri = process.env.mongo_uri; 
const port = process.env.port || 6000;

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(port, () => {
          console.log(`Server started on port ${port}`);
      });
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });


const route = require('./routes/route');
app.use('/', route);






