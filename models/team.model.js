const mongoose = require('mongoose');

const { Schema } = mongoose;

const TeamSchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model('Teams', TeamSchema);
