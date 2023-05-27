const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  trainerName: {
    type: String,
    required: true
  },
  team: [{
    name: {
      type: String,
      required: true
    }
  }]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
