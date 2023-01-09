const pool = require('../config/db');
const queries = require('../queries/notulen.queries');

const getMeetFinished = (req, res) => {
    const { meet_id } = req.params;
    pool.query(queries.getDataFinished, [ parseInt(meet_id) ]).then((result) => {
        return res.status('200').json(result.rows)
    })
    .catch( e => {
        console.log('error delete data', e)
        return res.status('500').json({
            message: "Gagal mengambil data"
        })
    })
};

const addNotulen = (req, res) => {
    // const user_id = user.id;
    const { notulen, meet_id } = req.body;
    if( notulen == '' || meet_id == ''){
        return res.status('400').json({
            message: 'Perintah Ditolak'
        })
    }
    pool.query(queries.insertData, [notulen, meet_id]).then((result) => {
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

const updateNotulen = (req, res) => {
    const { notulen, meet_id } = req.body;
    pool.query(queries.updateData, [ notulen , meet_id ]).then((result) => {
        return res.status('200').json({
            message: "Berhasil update notulen"
        })
    })
    .catch(e => {
        console.log('error update notulen', e)
        return res.status('500').json({
            message: "Gagal update notulen"
        })
    })
}

const deleteNotulen = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id) ]).then((result) => {
        return res.status('200').json({
            message: "Berhasil menghapus notulen"
        })
    })
    .catch( e => {
        console.log('error delete notulen', e)
        return res.status('500').json({
            message: "Gagal delete notulen"
        })
    })
}

const countNotulen = (req, res) => {
    pool.query(queries.countDataFinished).then((result) => {
        let totalNotulen = result.rows[0].count
        return res.status('200').json({
            total: parseInt(totalNotulen),
        });
    });
};

module.exports = {
    getMeetFinished,
    addNotulen,
    updateNotulen,
    deleteNotulen,
    countNotulen
}