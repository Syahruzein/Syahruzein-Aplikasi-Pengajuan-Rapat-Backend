const db = require("../models");
const config = require("../config/auth.config");
const pool = require('../config/db');
const queries = require('../queries/auth.queries');
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
    // Save User to Database
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      position: req.body.position,
    })
      .then(user => {
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles
              }
            }
          }).then(roles => {
            user.setRoles(roles)
            .then(() => {
              res.send({ message: "User was registered successfully!" });
            });
          });
        } 
        else {
          // user role = 1
          user.setRoles([1]).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.signin = (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: "1hr" // 1 hours
        });
        var authorities = [];
        // var fielderities = [];
        user.getRoles().then(roles => {
          for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLE_" + roles[i].name.toUpperCase());
          }
          res.cookie(String(user.id), token,{
              path: "/",
              expires: new Date(Date.now() + 1000 * 60 * 60),
              httpOnly: true,
              sameSite: 'lax',
              secure:true
          })
          return res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            position: user.position,
            roles: authorities,
            accessToken: token
          });
        })
        // user.getField().then(fields => {
        //   for (let i = 0; i < fields.length; i++) {
        //     fielderities.push("Bidang_" + fields[i].name.toUpperCase());
        //   }
        //   return res.status(200).send({
        //     id: user.id,
        //     username: user.username,
        //     email: user.email,
        //     field: fielderities,
        //     roles: authorities,
        //     accessToken: token
        //   });
        // })
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.getAuth = (req, res) => {
    pool.query(queries.getDataAll2).then((result) => {
      return res.status(200).json(result.rows)
    });
  };
  exports.getAuthAll = (req, res) => {
    pool.query(queries.getDataAll).then((result) => {
      return res.status(200).json(result.rows)
    });
  };
  exports.getAuthExcept = (req, res) => {
    const { username } = req.params;
    pool.query(queries.getDataExcept, [username]).then((result) => {
      return res.status(200).json(result.rows)
    })
    .catch( e => {
      console.log('error mengambil data', e)
      return res.status('500').json({
          message: "Gagal mengambil data"
      })
  })
  };
  exports.getAuthExceptSubmission = (req, res) => {
    const { username, position } = req.params;
    pool.query(queries.getDataExceptSubmission, [username, position]).then((result) => {
      return res.status(200).json(result.rows)
    })
    .catch( e => {
      console.log('error mengambil data', e)
      return res.status('500').json({
          message: "Gagal mengambil data"
      })
  })
  };
  exports.getAuthExecutive = (req, res) => {
    pool.query(queries.getDataDireksi).then((result) => {
      return res.status(200).json(result.rows)
    });
  };
  exports.getAuthDirector = (req, res) => {
    pool.query(queries.getDataDirektur).then((result) => {
      return res.status(200).json(result.rows)
    });
  };
  exports.getAuthName = (req, res) => {
    const { position } = req.params;
    pool.query(queries.getNameVerified, [position]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}
  // exports.createSubmission = (req, res) => {
  //   Meet.create({
  //     perihal: req.body.perihal,
  //     tempat: req.body.tempat,
  //     tanggal: req.body.tanggal,
  //     waktu: req.body.waktu,
  //     status: req.body.status,
  //     deskripsi: req.body.deskripsi,
  //     user_id: req.body.user_id
  //   }).then( () => {
  //       res.status(200).send({
  //         message: "berhasil menambahkan data"
  //     });
  //   })
  //   .catch(err => {
  //     res.status(500).send({ message: err.message });
  //   });
  // }