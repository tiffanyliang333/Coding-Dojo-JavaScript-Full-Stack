const Joke = require('../models/jokes.models');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        });
    };

// module.exports.findAllJokes = (req, res) => {
//     Joke.find()
//      .then((allJokes) => res.json(allJokes))
//      .catch((err) => console.log(err));
// }

// const findAllJokes = (req, res) => {
//     Joke.find()
//         .then((allJokes) => res.json(allJokes))
//         .catch((err) => console.log(err));
// }
// module.exports = {findAllJokes};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => {
            res.json({joke: oneJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        });
}

// const findOneJoke = (req, res) => {
//     const { params } = req;
//     Joke.findOne({_id: params._id})
//     .then((joke) => res.json(joke))
//     .catch((err) => console.log(err));
// };
// module.exports = {findOneJoke};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({joke: newJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body,{new: true, runValidators: true})
        .then(updatedJoke => {
            res.json({joke: updatedJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}