// routes.js - Router for app
// const mongoose = require('mongoose');
const TeamModel = require('../models/team.model');
const PlayerModel = require('../models/player.model');

module.exports = (app) => {
  app.get('/api/allTeams', async (req, res, next) => {
    try {
      const findTeams = await TeamModel.find({});
      res.send(findTeams);
    } catch (err) {
      next(err);
    }
  });

  app.post('/api/addTeam', async (req, res, next) => {
    try {
      req.body.forEach(async (currTeam) => {
        await TeamModel.create({ name: currTeam.team });
      });

      console.log(req.body[0].team);
      // for (var i = 0; len = arr.length)
    } catch (err) {
      console.log(err);
      next(err);
    }
  });

  app.get('/api/findTeam?', async (req, res, next) => {
    try {
      const { query } = req;
      const teamResult = await TeamModel.find({ name: query.name });
      res.send(teamResult);
    } catch (err) {
      next(err);
    }
  });

  app.post('', () => {});

  app.get('/api/allPlayers', async (req, res, next) => {
    try {
      const findPlayers = await PlayerModel.find({});
      res.send(findPlayers);
    } catch (err) {
      next(err);
    }
  });

  app.get('/api/findPlayer?', async (req, res, next) => {
    try {
      const { query } = req;
      const playerResult = await PlayerModel.find({
        firstName: query.firstName,
        lastName: query.lastName,
      });
      res.send(playerResult);
    } catch (err) {
      next(err);
    }
  });
};
