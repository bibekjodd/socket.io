const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
const bcrypt = require('bcryptjs')


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const userExits = await User.findOne({ email });
    if (userExits) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name, email, password, pic
    });

    if (user) {
        const { _id, name, email, pic } = user;
        res.status(201).json({
            _id,
            name,
            email,
            pic,
            token: generateToken(_id)

        })
    }
    else {
        res.status(400);
        throw new Error("Failed to create user")
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please enter all the fields');
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        const { _id, name, email, pic } = user;
        res.status(201).json({
            _id,
            name,
            email,
            pic,
            token: generateToken(_id)
        });
        return;
    }


    res.status(400);
    throw new Error("Invalid user information");
})


module.exports = { registerUser, authUser }