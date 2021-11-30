const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header("token");
    try {
        const decode = jwt.verify(token, "cheap_bus_ticket");
        if (decode) {
            req.user = decode;
            next();
        } else {
            res.status(401).send("You are not login!");
        }
    } catch (error) {
        res.status(401).send("You are not login!");
    }
}

module.exports = {
    authenticate,
}