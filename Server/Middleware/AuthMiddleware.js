const jwt = require('jsonwebtoken');
const secretKey = 'mysecretkey'; // replace with your secret key

function AuthMiddleware(req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        // check if the header starts with "Bearer " prefix
        const token = authHeader.split(' ')[1]; // split the header and get the token part
        authHeader = token;
    }
    jwt.verify(authHeader, process.env.KEY, (error, data) => {
        if (error) {
            return res.status(400).send({ message: "invalid token" })
        }

        else {
            req.body.userID = data.id;
            next();
        }
    })
}

module.exports = AuthMiddleware;
