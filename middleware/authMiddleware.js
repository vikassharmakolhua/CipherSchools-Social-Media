const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    //return res.status(200).json({message: "nice"});

    if(!token){
        return res.status(401).json({message: 'Access denied. No token provided,'});

    }

    try {
        const decoded =jwt.verify(token,process.env.jwtSecret);
        req.user = decoded;
        next();

    } catch(error) {
        res.status(401).json({message: 'Invalid token'});
    }
};