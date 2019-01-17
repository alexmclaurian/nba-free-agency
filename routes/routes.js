// routes.js - Router for app
// const express = require('express');
// const router = express.Router();

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('NBA Free Agency 2019!');
  });

  app.get('/teams', (req, res) => {
    res.send('Lakers<br/>Kings<br/>Rockets');
  });
};
