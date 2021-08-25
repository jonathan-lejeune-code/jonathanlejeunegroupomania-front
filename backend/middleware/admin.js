const jwt = require('jsonwebtoken');
const db = require('../models/index.js');


const admin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(
        token,
        process.env.KEY_TOKEN
    );
    const userId = decodedToken.userId;

    db.User.findOne({
            where: {
                id: userId
            }
        })
        .then(user => {
            if (user.isAdmin == true) {
                next();
            } else {
                res.status(401).json({
                    message: "Autorisation refusée, seuls les admins peuvent avoir l'accès"
                })
            }
        })
        .catch(error => res.status(500).json({
            error
        }));

}
module.exports = admin;