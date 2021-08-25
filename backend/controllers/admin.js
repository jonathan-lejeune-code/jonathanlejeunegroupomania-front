const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const fs = require('fs');

const db = require('../models/index.js');

console.log(Object.keys(db));


exports.getAllUsersAdmin = (req, res, next) => {
    db.User.findAll()
        .then((users) => res.status(200).json({
            users
        }))
        .catch(err => res.status(401).json({
            err
        }))
};
exports.getAllPublicationsAdmin = (req, res, next) => {
    db.Publication.findAll({
            limit: 5,
            include: [{
                model: db.User,
                attributes: ['id', 'username']
            }],
            order: [
                ["id", "DESC"]
            ]
        })
        .then(publications => res.status(200).json({
            publications
        }))
        .catch(error => res.status(500).json({
            error
        }))
}