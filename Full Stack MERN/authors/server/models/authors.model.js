const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, 
        required: [true, "Name is required."],
        minLength: [3, "Name must have at least 3 characters."],
    }
},
    { timestamp: true }
);

module.exports = mongoose.model('Author', AuthorSchema);