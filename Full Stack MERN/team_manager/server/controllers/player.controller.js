const { response } = require('express');
const Player = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => {
            res.json({player: newPlayer})
        })
        .catch((err) => {
            res.status(400).json({err});
        });
}

module.exports.getAllPlayers = (req, res) => {
    Player.find()
        .then((allPlayers) => {
            res.json({player: allPlayers})
        })
        .catch((err) => {
            res.status(400).json({err});
        })
}

module.exports.getOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(player => {
            res.json({player: player})
            console.log('player', req.params)
        })
        .catch((err) => {
            res.status(400).json({err});
        });
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch((err) => {
            res.status(400).json({err});
        })
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => {
            res.status(400).json({err});
        })
}