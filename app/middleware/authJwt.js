const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
verifyToken = (req, res, next ) => {
    const token = req.headers["x-access-token"];
    // const cookies = req.headers.cookie
    // const token = cookies;
    // console.log(token);
    if (!token) {
        return res.status(404).json({message:"Token tidak ada"})
    }
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(String(token), config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        // return res.status(403).send({
        //     message: decoded.id
        // })
        req.userId = decoded.id;
        next();
    });
};
isKaprodi = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "kaprodi") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Kaprodi Role!"
            });
            return;
        });
    });
};
isKadep = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "kadep") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Kadep Role!"
            });
            return;
        });
    });
};
isWadir = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "wadir") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Wadir Role!"
            });
            return;
        });
    });
};
isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
    });
};
isDirector = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "director") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Director Role!"
            });
        });
    });
};
isStaff = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "staff") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Staff Role!"
            });
            return;
        });
    });
};
isDirectorOrAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "kaprodi") {
                    next();
                    return;
                }
                if (roles[i].name === "kadep") {
                    next();
                    return;
                }
                if (roles[i].name === "wadir") {
                    next();
                    return;
                }
                if (roles[i].name === "director") {
                    next();
                    return;
                }
                if (roles[i].name === "staff") {
                    next();
                    return;
                }
                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Kaprodi or Kadep or Wadir or Director or Staff or Admin Role!"
            });
        });
    });
};
const authJwt = {
    verifyToken: verifyToken,
    isKaprodi: isKaprodi,
    isKadep: isKadep,
    isWadir: isWadir,
    isDirector: isDirector,
    isStaff: isStaff,
    isAdmin: isAdmin,
    isDirectorOrAdmin: isDirectorOrAdmin
};
module.exports = authJwt;