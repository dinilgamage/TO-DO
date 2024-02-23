const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true
        
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

//static signup method
userSchema.statics.signup = async function(email, password) {

    //validation
    if (!email || !password) {
        throw new Error('All fields are required');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Invalid email');
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password must be 8+ characters with 1 lower and uppercase, 1 number, and 1 symbol.');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw new Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hashedPassword });
    
    return user;
};

module.exports = mongoose.model('User', userSchema);