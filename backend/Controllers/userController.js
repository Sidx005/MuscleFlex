const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

const signUp = async (req, res) => {
    const { email, password } = req.body;
    if(!email||!password){
        res.json('Incorrect details')
    }
    try {
        const user = await User.signUp(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {
        console.error(error);
        res.status(400).json({ mssg: error.message });
    }
};

const users = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);  
    } catch (error) {
        res.status(400).json({ mssg: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ mssg: error.message });
    }
};

module.exports = { signUp, loginUser, users };
