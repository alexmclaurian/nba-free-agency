const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  currentTeam: { type: String },
  age: { type: String },
});

PlayerSchema.methods.getPlayer = (name) => {
  Player.find({ firstName: name.firstName, lastName: name.lastName }).then(
    (player) => {
      return player;
    }
  );
};

module.exports = mongoose.model('Players', PlayerSchema);

/*
playername
team
age
gp
w
l
min
pts
fgm
fga
fg%
3pm
3pa
3p%
ftm
fta
ft%
oreb
dreb
reb
ast
tov
stl
blk
pf
fantasypoints
doubledoubles
tripledoubles
plusminus
*/
