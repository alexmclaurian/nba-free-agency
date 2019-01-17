// Main entry into app

const express = require('express');
// const mongoose = require('mongoose');
// const keys = require('./config/keys');

const PORT = process.env.PORT || 3000;

const app = express();

require('./routes/routes')(app);

app.listen(PORT);
