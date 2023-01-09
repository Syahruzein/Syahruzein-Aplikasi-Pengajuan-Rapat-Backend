const db = require("../models");
const Meet = db.meet;
const moment = require('moment');
const { Op } = require("sequelize");

// checkDuplicateDate = (req, res, next) => {
//     Meet.findAll({
//         where: {
//             tanggal: req.body.tanggal,
//         }
//     }).then(meet => {
//         if(meet.length >= 3){
//             res.status(400).send({
//                 message: "Failed! Tanggal tersebut sudah penuh!!"
//             });
//             return;
//         }
        
//         next();
//     });
// };

checkDuplicateDate = (req, res, next) => {
    Meet.findAll({
        where: {
            tanggal: req.body.tanggal,
        }
    }).then(meet => {
        const dates = req.body.tanggal;
        const times = req.body.waktu;
        // const dated = moment(dates + ' ' + times).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
        const date = moment(dates).tz('Asia/Jakarta').format('YYYY-MM-DD');
        // const time = moment(times, [moment.ISO_8601, 'HH:mm']).tz('Asia/Jakarta').format('HH:mm:ss');
        const time = moment(times, [moment.ISO_8601, 'HH:mm']).tz('Asia/Jakarta').format('hh:mm:ss');
        if(meet.length >= 5){
            res.status(400).send({
                message: "Failed! Tanggal tersebut sudah penuh!!"
            });
            return;
        }
        // console.log( date, 'disini')
        // console.log( time, 'disini')
        const startTime = moment(time, [moment.ISO_8601, 'HH:mm']).add(-2, 'hours').tz('Asia/Jakarta').format('HH:mm:ss');
        const beforeTime = moment(time, [moment.ISO_8601, 'HH:mm']).add(2, 'hours').tz('Asia/Jakarta').format('HH:mm:ss');
        // console.log( startTime, 'disini')
        // console.log( beforeTime, 'disini')
        Meet.findOne({
            where: {
                tanggal: req.body.tanggal,
                receiver: req.body.receiver,
                waktu: {
                    [Op.between]: [startTime, beforeTime]
                }
            }
        }).then(meet => {
            if(meet) {
                res.status(400).send({
                    message: "Failed! Waktu sudah di booking!!"
                })
                return
            }
            next();
        });
    });
};

// checkDuplicateDateAndTime = (req, res, next) => {
//     Meet.findAll({
//         where: {
//             tanggal: req.body.tanggal,
//         }
//     }).then(meet => {
//         if(meet.length >= 3){
//             res.status(400).send({
//                 message: "Failed! The Date is already Full!!"
//             });
//             return;
//         }
//         Meet.findOne({
//             where: {
//                 tanggal: req.body.tanggal,
//                 waktu: req.body.waktu                 
//             }
//         }).then(meet => {
//                 if(meet) {
//                     res.status(400).send({
//                         message: "Failed! Time already use!!"
//                     });
//                     return;
//                 }
//                 next();
//             });
//         });
//     };

// checkDuplicateDate = async (req, res, next) => {
//     try {
//       const meet = await Meet.findAll({
//         where: {
//           tanggal: req.body.tanggal,
//         },
//       });
  
//       if (meet.length >= 3) {
//         return res.status(400).send({
//           message: "Failed! Tanggal tersebut sudah penuh!!",
//         });
//       }
  
//       const oneMeet = await Meet.findOne({
//         where: {
//           waktu: {
//             [Op.between]: [
//               req.body.waktu,
//               moment(req.body.waktu, format).add(2, "hours"),
//             ],
//           },
//         },
//       });

//       if (!oneMeet) {
//         return next();
//       }
      
//     //   console.log(oneMeet, 'disini')
//       const format = "hh:mm:ss";
//       const time = moment(req.body.waktu, format);
//       const beforeTime = moment(oneMeet.waktu, format).add(-1, "hours");
//       const afterTime = moment(oneMeet.waktu, format).add(2, "hours");
//       console.log(time, beforeTime, afterTime, "disini")
//       if (time.isBetween(beforeTime, afterTime)) {
//         return res.status(400).send({
//           message: "Failed! Waktu sudah di booking!!",
//         });
//       } else {
//         return next();
//       }
//     } catch (e) {
//       return res.status(500).send({e, message: "Terjadi Kesalahan !!" });
//     }
// };

checkUserData = (req, res, next) => {
    Meet.findOne({
        where: {
            user_id: req.body.user_id
        }
    }).then(meet => {
        if(meet){
            res.status(400).send({
                message: "Failed! Data meeting is not found"
            });
            return;
        }
        next();
    });
};

const verifyMeet = {
    checkDuplicateDate: checkDuplicateDate,
    // checkDuplicateDateAndTime: checkDuplicateDateAndTime,
    checkUserData: checkUserData
};
module.exports = verifyMeet;

// () => {
//     res.status(400).send({
//         message: "Failed! Date meeting is already in submission"
//     });
//     return;
    
// }).catch(()=>{
//     next();
// });