const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
{
    playerName: {type: String, 
        required: [true, "Player name is required."],
        minLength: [2, "Player name must have at least 2 characters."],},
    position: {type: String},
    gameOne: {type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",},
    gameTwo: {type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",},
    gameThree: {type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",},
},
    { timestamp: true }
);

module.exports = mongoose.model('Player', PlayerSchema);