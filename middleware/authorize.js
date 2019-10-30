const jwt = require('jsonwebtoken');
const JWTSECRET = require('../utils/config.json').JWTSECRET

module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, JWTSECRET, (err, auth) => {
            if (err) {
                console.log("Token Authentication Failed");
                res.status(401).json({
                    status_code: 401,
                    error: "Authentication Failed"
                });
            } else {
                console.log("Token Verified: ", auth);
                res.auth = auth;
                next();
            }
        });
    } else {
        console.log("No Bearer Found. Going next()");
        res.auth = false;
        next();
    }
}
