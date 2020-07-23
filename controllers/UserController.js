const UserModel = require('../models/User');

const get = (req, res) => {
    UserModel.find({}, (err, users) => {
        console.error('err: ', err)
        console.log('users data: ', users)
    })
};


module.exports = {
    get
}