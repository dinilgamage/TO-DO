const User = require('../models/userModel');

//login user
exports.loginUser = async (req, res) => {
    res.json({message: 'Login'})
};


//signup user
exports.signupUser = async (req, res) => {
    res.json({message: 'Signup'})
};  