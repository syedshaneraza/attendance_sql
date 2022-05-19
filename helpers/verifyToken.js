const jwt = require('jsonwebtoken');

exports.adminMiddleware = (req, res, next) => {
    console.log('admin verify')
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        try {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            jwt.verify(bearerToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if (err) {
                  return res.status(401).send({ message: err.message , success : false });
                }
                req.auth = decoded;
                if (req.auth.role === "admin") {
                    next();
                } else {
                    res.status(401).send({
                    message : "You have no access to get this route" ,
                    success : false
                    });
                }
            });
        } catch (e) {
           res.status(401).send({
            message: "unauthorised",
            success : false
           })
        }
    } else {
        res.status(403).send({
            message: "Token is not matched or accepted",
            success : false
        });
    }
}