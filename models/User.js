const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        unique: true,
        default: ""
    },
    age: {
        type: Number,
        default: ""
    },
    decks: [{
        type: Schema.Types.ObjectId,
        ref: "Deck"
    }]
});

module.exports = mongoose.model('User', UserSchema);