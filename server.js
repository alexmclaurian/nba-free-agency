// Main entry into app

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// const team = require('./models/team.model');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // const record = db.teams.find();
  // const Team = mongoose.model('Teams', teamSchema);
  // console.log(Team);
  // db.collection('teams').insert({ name: 'Grizzlies' });
  //  team.create({ city: 'Brooklyn', name: 'Nets' });
});

require('./routes/routes')(app);

app.listen(PORT);
