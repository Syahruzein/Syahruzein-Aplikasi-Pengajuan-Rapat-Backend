const pool = require('../config/db');
const db = require("../models");
const queries = require('../queries/meet.queries');
const queried = require('../queries/notulen.queries');

const Meet = db.meet;
const moment = require('moment');
const { meet } = require('../models');

const getMeetAll = (req, res) => {
    pool.query(queries.getDataAll).then((result) => {
        return res.status(200).json(result.rows)
    });
};

const getMeetByDate = (req, res) => {
    const { tanggal } = req.params;
    pool.query(queries.getDataByDate, [tanggal]).then((result) => {
        return res.status(200).json(result.rows)
    }).catch( e => {
        console.log(e, 'Error mengambil data')
        return res.status(500).json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetProcessById = (req, res) => {
    // pool.query(queries.getDataProcess).then((result) => {
    //     return res.status(200).json(result.rows)
    // });
    const { user_id } = req.params;
    pool.query(queries.getDataProcessById, [ parseInt(user_id) ]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetProcess = (req, res) => {
    pool.query(queries.getDataProcess).then((result) => {
        return res.status('200').json(result.rows)
    });
};

const getMeetProcessByStaff = (req, res) => {
    const { receiver, maker } = req.params;
    pool.query(queries.getDataProcessByStaff, [receiver, maker]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetProcessByPosition = (req, res) => {
    const { receiver } = req.params;
    pool.query(queries.getDataProcessByPosition, [receiver]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetProcessAndVerified = (req, res) => {
    pool.query(queries.getDataProcessAndVerified).then((result) => {
        return res.status(200).json(result.rows)
    });
};

const getMeetVerified = (req, res) => {
    pool.query(queries.getDataVerified).then((result) => {
        return res.status(200).json(result.rows)
    });
};

const getMeetVerifiedByReceiverByMaker = (req, res) => {
    const { receiver, maker } = req.params;
    pool.query(queries.getDataVerifiedByReceiverByMaker, [receiver, maker]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetVerifiedById = (req, res) => {
    const { user_id } = req.params;
    pool.query(queries.getDataVerifiedById, [parseInt(user_id)]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetVerifiedByUsername = (req, res) => {
    const { participants } = req.params;
    pool.query(queries.getDataVerifiedByUsername, [participants]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetVerifiedByPosition = (req, res) => {
    const { receiver } = req.params;
    pool.query(queries.getDataVerifiedByPosition, [receiver]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch(e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetVerifiedByIdByPosition = (req, res) => {
    const { user_id, receiver } = req.params;
    pool.query(queries.getDataVerifiedByIdByPosition, [user_id, receiver]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch(e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetVerifiedByDate = (req, res) => {
    const { tanggal } = req.params;
    pool.query(queries.getDataVerifiedByDate, [tanggal]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetVerifiedByDateById = (req, res) => {
    const { tanggal, user_id } = req.params;
    pool.query(queries.getDataVerifiedByDateById, [tanggal, user_id]).then((result) => {
        return res.status('200').json(result.rows)
        // console.log(req.params.tanggal, req.params.receiver)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetVerifiedByDateByReceiver = (req, res) => {
    const { tanggal, receiver } = req.params;
    pool.query(queries.getDataVerifiedByDateByReceiver, [tanggal, receiver]).then((result) => {
        return res.status('200').json(result.rows)
        // console.log(req.params.tanggal, req.params.receiver)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetVerifiedByDateByParticipants = (req, res) => {
    const { tanggal, participants } = req.params;
    pool.query(queries.getDataVerifiedByDateByParticipants, [tanggal, participants]).then((result) => {
        return res.status('200').json(result.rows)
        // console.log(req.params.tanggal, req.params.receiver)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetVerifiedByDateByIdByReceiver = (req, res) => {
    const { tanggal, user_id, receiver } = req.params;
    pool.query(queries.getDataVerifiedByDateByIdByReceiver, [tanggal,  user_id, receiver ]).then((result) => {
        return res.status('200').json(result.rows)
        // console.log(req.params.tanggal, req.params.receiver)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetFinished = (req, res) => {
    pool.query(queries.getDataFinished).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const getMeetFinishedByReceiverByMaker = (req, res) => {
    const { receiver, maker } = req.params;
    pool.query(queries.getDataFinishedByReceiverByMaker, [receiver, maker]).then((result) => {
        return res.status('200').json(result.rows)
    }).catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetFinishedByUidByParticipants = (req, res) => {
    const { user_id, participants } = req.params;
    pool.query(queries.getDataFinishedByUidByParticipants, [user_id, participants]).then((result) => {
        return res.status('200').json(result.rows)
    }).catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetFinishedByReceiverByParticipants = (req, res) => {
    const { receiver, participants } = req.params;
    pool.query(queries.getDataFinishedByReceiverByParticipants, [receiver, participants]).then((result) => {
        return res.status('200').json(result.rows)
    }).catch( e=> {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetFinishedByIdByReceiverByParticipants = (req, res) => {
    const { user_id, receiver, participants } = req.params;
    pool.query(queries.getDataFinishedByIdByReceiverByParticipants, [user_id, receiver, participants]).then((result) => {
        return res.status('200').json(result.rows)
    }).catch( e=> {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
}

const getMeetRejectById = (req, res) => {
    const { user_id } = req.params;
    pool.query(queries.getDataRejectById, [ parseInt(user_id) ]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error mengambil data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

// const getMeet = (req, res) => {
//     pool.query(queries.getData).then((result) => {
//         return res.status(200).json(result.rows)
//     });
// };

const addMeet = (req, res) => {
    // const user_id = user.id;
    const { perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, user_id, maker, verified } = req.body;
    if(perihal == '' || tempat == '' || tanggal == '' || waktu == '' || status == '' || receiver == '' || deskripsi == '' || user_id == '' || maker == ''){
        return res.status('400').json({
            message: 'Perintah Ditolak'
        })
    }
    pool.query(queries.insertData, [perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, user_id, maker, verified]).then((result) => {
        return res.status('200').json({
            message: 'Berhasil menambahkan data'
        })
        // console.log('result', result);
    })
    .catch( e => {
        console.log('error add Meet', e) 
        return res.status('500').json({
            message: 'Gagal menambahkan data'
        })
    })
};

const updateMeet = (req, res) => {
    const { perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, id } = req.body;
    if(perihal == '' || tempat == '' || waktu == '' || status == '' || receiver == '' || participants == '' || deskripsi == '' || id == '' ){
        return res.status(400).json({
            message: 'Perintah ditolak'
        })
    }
    pool.query(queries.updateData, [ perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, id ]).then((result) => {
        return res.status('200').json({
            message: "Berhasil update data"
        })
    })
    .catch( e => {
        console.log('error update data', e)
        return res.status('500').json({
            message: "Gagal update data"
        })
    })
}

const updateMeetReject = (req, res) => {
    const { status, alasan, id} = req.body;
    if( status == '' || alasan == '' || id == ''){
        return res.status(400).json({
            message: "Perintah ditolak"
        })
    }
    pool.query(queries.updateReject, [status, alasan, id]).then((result) => {
        return res.status('200').json({
            message: "Berhasil menolak rapat"
        })
    }).catch( e => {
        console.log('error menolak data', e)
        return res.status('500').json({
            message: "Gagal menolak data"
        })
    })
}

const updateMeetVerified = (req, res) => {
    const { perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, verified, id } = req.body;
    if(perihal == '' || tempat == '' || tanggal == '' || waktu == '' || status == '' || receiver == '' || deskripsi == '' || verified == '' || id == ''){
        return res.status(400).json({
            message: "Perintah ditolak"
        })
    }
    pool.query(queries.updateDataVerified, [ perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, verified, id]).then((result) => {
        return res.status('200').json({
            message: "Berhasil update verifikasi data"
        })
    })
    .catch( e => {
        console.log('error update verifikasi data', e)
        return res.status('500').json({
            message: "Gagal update verifikasi data"
        })
    })
}

const updateMeetSuccess = (req, res) => {
    const { perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, verified, id } = req.body;
    if(perihal == '' || tempat == '' || tanggal == '' || waktu == '' || status == '' || receiver == '' || deskripsi == '' || verified == '' || id == ''){
        return res.status(400).json({
            message: "Perintah ditolak"
        })
    }
    pool.query(queries.updateDataVerified, [ perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, verified, id ]).then((result) => {
        return res.status('200').json({
            message: "Berhasil update data"
        })
    })
    .catch( e => {
        console.log('error update data', e)
        return res.status('500').json({
            message: "Gagal update data"
        })
    })
}

const updateMeetFinish = (req, res) => {
    const { perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, verified, id, notulen, meet_id, maker } = req.body;
    pool.query(queried.insertData, [ notulen, meet_id, maker]).then(() => {
        pool.query(queries.updateDataVerified, [ perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, verified, id ]).then((result) => {
            return res.status('200').json({
                message: "Berhasil update data"
            })
        })
    })
    // pool.query(queried.insertData, [ notulen, meet_id]).then((result) => {
    //     return res.status('200').json({
    //         message: "Berhasil update data"
    //     })
    // })
    .catch( e => {
        console.log('error update data', e)
        return res.status('500').json({
            message: "Gagal update data"
        })
    })
}

const deleteMeet = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id) ]).then((result) => {
        return res.status('200').json({
            message: "Berhasil delete data"
        })
    })
    .catch( e => {
        console.log('error delete data', e)
        return res.status('500').json({
            message: "Gagal delete data"
        })
    })
}

const countMeetProcessById = (req, res) => {
    // pool.query(queries.countDataProcess).then((result) => {
    //     let totalMeet = result.rows[0].count
    //     return res.status(200).json({
    //         total: parseInt(totalMeet),
    //     });
    // });
    const { user_id } = req.params;
    pool.query(queries.countDataProcessById, [ parseInt(user_id) ]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet)
        })
    })
    .catch( e => {
        console.log('error count data', e)
        return res.status('500').json({
            message: "Gagal menghitung data"
        })
    })
};

const countMeetProcessByReceiver = (req, res) => {
    const { receiver } = req.params;
    pool.query(queries.countDataProcessByReceiver, [receiver]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet)
        })
    })
    .catch(e => {
        console.log('error count data', e)
        return res.status('500').json({
            message: "Gagal menghitung data"
        })
    })
}

const countMeetProcess = (req, res) => {
    pool.query(queries.countDataProcess).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet),
        });
    });
};

const countMeetProcessByReceiverByMaker = (req, res) => {
    const { receiver, maker } = req.params;
    pool.query(queries.countDataProcessByReceiverByMaker, [receiver, maker]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet),
        });
    });
};

const countMeetSuccess = (req, res) => {
    pool.query(queries.countDataSuccess).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status(200).json({
            total: parseInt(totalMeet),
        });
    });
};

const countMeetSuccessByReceiverByMaker = (req, res) => {
    const { receiver, maker } = req.params;
    pool.query(queries.countDataSuccessByReceiverByMaker, [receiver, maker]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet),
        });
    });
};

const countMeetSuccessById = (req, res) => {
    const { user_id } = req.params;
    pool.query(queries.countDataSuccessById, [parseInt(user_id)]).then((result) => {
        let totalMeetId = result.rows[0].count
        return res.status(200).json({
            total: parseInt(totalMeetId),
        });
    });
};

const countMeetSuccessByReceiver = (req, res) => {
    const { receiver } = req.params;
    pool.query(queries.countDataSuccessByReceiver, [receiver]).then((result) => {
        let totalMeetReceiver = result.rows[0].count
        return res.status(200).json({
            total: parseInt(totalMeetReceiver),
        });
    });
};

const countMeetSuccessByUsername = (req, res) => {
    const { participants } = req.params;
    pool.query(queries.countDataSuccessByUsername, [participants]).then((result) => {
        let totalMeetInvite = result.rows[0].count
        return res.status(200).json({
            total: parseInt(totalMeetInvite),
        });
    });
};

const countMeetSuccessByIdByReceiver = (req, res) => {
    const { user_id, receiver } = req.params;
    pool.query(queries.countDataSuccessByIdByReceiver, [user_id, receiver]).then((result) => {
        let totalMeetInvite = result.rows[0].count
        return res.status(200).json({
            total: parseInt(totalMeetInvite),
        });
    });
};

const countMeetFinished = (req, res) => {
    pool.query(queries.countDataFinished).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status(200).json({
            total: parseInt(totalMeet),
        });
    });
};

const countMeetFinishedByReceiverByMaker = (req, res) => {
    const { receiver, maker } = req.params;
    pool.query(queries.countDataFinishedByReceiverByMaker, [receiver, maker]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet),
        });
    });
};

const countMeetFinishedByUidByParticipants = (req, res) => {
    const { user_id, participants } = req.params;
    pool.query(queries.countDataFinishedByUidByParticipants, [ parseInt(user_id), participants ]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet)
        })
    })
    .catch( e => {
        console.log('error count data', e)
        return res.status('500').json({
            message: "Gagal menghitung data"
        })
    })
};

const countMeetFinishedByReceiverByParticipants = (req, res) => {
    const { receiver, participants } = req.params;
    pool.query(queries.countDataFinishedByReceiverByParticipants, [ receiver, participants ]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet)
        })
    })
    .catch( e => {
        console.log('error count data', e)
        return res.status('500').json({
            message: "Gagal menghitung data"
        })
    })
};

const countMeetFinishedByIdByReceiverByParticipants = (req, res) => {
    const { user_id, receiver, participants } = req.params;
    pool.query(queries.countDataFinishedByIdByReceiverByParticipants, [ user_id, receiver, participants ]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet)
        })
    })
    .catch( e => {
        console.log('error count data', e)
        return res.status('500').json({
            message: "Gagal menghitung data"
        })
    })
};

const countMeetRejectById = (req, res) => {
    const { user_id } = req.params;
    pool.query(queries.countDataRejectById, [ parseInt(user_id) ]).then((result) => {
        let totalMeet = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalMeet)
        })
    })
    .catch( e => {
        console.log('error count data', e)
        return res.status('500').json({
            message: "Gagal menghitung data"
        })
    })
};

module.exports = {
    getMeetAll,
    getMeetByDate,
    getMeetProcessById,
    getMeetProcess,
    getMeetProcessByStaff,
    getMeetProcessByPosition,
    getMeetProcessAndVerified,
    getMeetVerified,
    getMeetVerifiedByReceiverByMaker,
    getMeetVerifiedById,
    getMeetVerifiedByUsername,
    getMeetVerifiedByPosition,
    getMeetVerifiedByIdByPosition,
    getMeetVerifiedByDate,
    getMeetVerifiedByDateById,
    getMeetVerifiedByDateByReceiver,
    getMeetVerifiedByDateByParticipants,
    getMeetVerifiedByDateByIdByReceiver,
    getMeetFinished,
    getMeetFinishedByReceiverByMaker,
    getMeetFinishedByUidByParticipants,
    getMeetFinishedByReceiverByParticipants,
    getMeetFinishedByIdByReceiverByParticipants,
    getMeetRejectById,
    // getMeet,
    addMeet,
    updateMeet,
    updateMeetSuccess,
    updateMeetFinish,
    updateMeetVerified,
    updateMeetReject,
    deleteMeet,
    countMeetProcess,
    countMeetProcessByReceiverByMaker,
    countMeetProcessById,
    countMeetProcessByReceiver,
    countMeetSuccess,
    countMeetSuccessByReceiverByMaker,
    countMeetSuccessById,
    countMeetSuccessByReceiver,
    countMeetSuccessByUsername,
    countMeetSuccessByIdByReceiver,
    countMeetFinished,
    countMeetFinishedByReceiverByMaker,
    countMeetFinishedByUidByParticipants,
    countMeetFinishedByReceiverByParticipants,
    countMeetFinishedByIdByReceiverByParticipants,
    countMeetRejectById
}