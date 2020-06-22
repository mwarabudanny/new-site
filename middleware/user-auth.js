const jwt = require('jsonwebtoken');
var jwtDecode = require('jwt-decode');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verified_token = jwt.verify(token, process.env.JWT_KEY);
        req.userData = verified_token; 
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed error 401 expired token'
        });
    }
};