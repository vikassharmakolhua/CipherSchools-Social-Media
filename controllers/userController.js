const User=require('../models/user');
require('dotenv').config();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



exports.registerUser = async (req, res)  => {
    try {
        const { username, email, password} = req.body;

        const exitingUser = await User.findOne({email});
        if(exitingUser)
        {
            return res.status(400).json({ message: 'User with this email already exists'});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user = new User({
            username,
            email,
            password: hashedPassword,

        });

        await user.save();

        const token = jwt.sign({ userId: user._id}, process.env.jwtSecret);

        res.status(201).json({ message: 'User registered successfully',token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Internal server error'});
    }
};

exports.loginUser = async (req,res) => {
    try {
        const { email, password} = req.body;

        const user = await User.findOne({email});

        if(!user) {
            return  res.status(401).json({ message: 'Authentication failed'});
        }

        const passwordMatch = await bcrypt.compare(password,user.password);

        if(!passwordMatch)
        {
            return res.status(401).json({ message: 'Authentication failed'});
        }

        const token = jwt.sign({ userId: user._id}, process.env.jwtSecret);

        res.status(200).json({message: "Authentication successful",token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server error'});
    }
}