const UserModel = require('../models/User');
const DeckModel = require('../models/Deck');
const { ErrorHandler } = require('../helpers/error');

const get = async (req, res, next) => {
    const users = await UserModel.find({});
    return res.json(users);
};

const create = async (req, res, next) => {
    const { firstName, lastName, email, age } = req.body;
    const newUser = new UserModel({
        firstName,
        lastName,
        email,
        age
    });
    await newUser.save();
    return res.status(201).json(newUser);
}

const getById = async (req, res, next) => {
    const { userId } = req.params;
    const user = await UserModel.findById(userId);
    res.status(200).json({user});
}

const replaceUser = async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;

    await UserModel.findByIdAndUpdate(userId, newUser);

    res.status(200).json({success: true});
}

const updateUser = async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;

    await UserModel.findByIdAndUpdate(userId, newUser);

    res.status(200).json({success: true});
}

const remove = async (req, res, next) => {
    const { userId } = req.params;
    await UserModel.findByIdAndDelete(userId);
    res.status(200).json({success: true});
}

const createUserDeck = async (req, res, next) => {
    const { userId } = req.params;

    //  Create a new deck
    const newDeck = new DeckModel(req.body);

    // Get user
    const user = await UserModel.findById(userId);

    newDeck.owner = user;

    await newDeck.save();

    // Add deck
    user.decks.push(newDeck._id);

    // Save user
    await user.save();

    res.status(201).json({deck: newDeck});
}

const getUserDeck = async (req, res, next) => {
    const { userId } = req.params;

    // Get user
    const user = await UserModel.findById(userId).populate('decks');
    return res.status(200).json({decks: user.decks});
}

module.exports = {
    get,
    create,
    getById,
    replaceUser,
    updateUser,
    remove,
    createUserDeck,
    getUserDeck
}