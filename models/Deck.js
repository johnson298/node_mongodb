const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    total: {
        type: Number,
        default: 0
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Deck', DeckSchema);