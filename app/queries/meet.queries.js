const getDataAll = "SELECT * FROM meetings";
const getDataByDate = "SELECT * FROM meetings WHERE tanggal = $1";
const getDataProcess = "SELECT * FROM meetings WHERE status='1'";
const getDataProcessByStaff = "SELECT * FROM meetings WHERE receiver = $1 AND status='1' OR $2 = ANY(maker) AND status='1'";
const getDataProcessById = "SELECT * FROM meetings WHERE user_id= $1 AND status='1'";
const getDataProcessByPosition = "SELECT * FROM meetings WHERE receiver = $1 AND status = '1'";
const getDataProcessAndVerified = "SELECT * FROM meetings WHERE status='1' OR status='2'";
const getDataVerified = "SELECT * FROM meetings WHERE status='2'";
const getDataVerifiedByReceiverByMaker = "SELECT * FROM meetings WHERE (receiver = $1 AND status='2') OR ($2 = ANY(maker) AND status='2')";
const getDataVerifiedById = "SELECT * FROM meetings WHERE user_id = $1 AND status = '2'";
const getDataVerifiedByUsername = "SELECT * FROM meetings WHERE $1 = ANY(participants) AND status = '2'";
const getDataVerifiedByPosition = "SELECT * FROM meetings WHERE receiver = $1 AND status = '2'";
const getDataVerifiedByIdByPosition = "SELECT * FROM meetings WHERE (user_id = $1 AND status = '2') OR (receiver = $2 AND status = '2') ";
const getDataVerifiedByDate = "SELECT * FROM meetings WHERE tanggal = $1 AND status='2'";
const getDataVerifiedByDateById = "SELECT * FROM meetings WHERE tanggal = $1 AND user_id = $2 AND status = '2'";
const getDataVerifiedByDateByReceiver = "SELECT * FROM meetings WHERE tanggal = $1 AND receiver = $2 AND status = '2'";
const getDataVerifiedByDateByParticipants = "SELECT * FROM meetings WHERE tanggal = $1 AND $2 = ANY(participants) AND status = '2'";
const getDataVerifiedByDateByIdByReceiver = "SELECT * FROM meetings WHERE (tanggal = $1 AND user_id = $2 AND status = '2') OR (tanggal = $1 AND receiver = $3 AND status = '2')";
const getDataFinished = "SELECT * FROM meetings WHERE status='3'";
const getDataFinishedByReceiverByMaker = "SELECT * FROM meetings WHERE (receiver = $1 AND status='3') OR ($2 = ANY(maker) AND status='3')";
const getDataFinishedByUidByParticipants = "SELECT * FROM meetings WHERE (status = '3' AND user_id = $1) or (status = '3' AND $2 = ANY(participants))";
const getDataFinishedByReceiverByParticipants = "SELECT * FROM meetings WHERE (status = '3' AND receiver = $1) or (status = '3' AND $2 = ANY(participants))";
const getDataFinishedByIdByReceiverByParticipants = "SELECT * FROM meetings WHERE (status = '3' AND user_id = $1) or (status = '3' AND receiver = $2) or (status = '3' AND $3 = ANY(participants))";
const getDataRejectById = "SELECT * FROM meetings WHERE user_id= $1 AND status='4'";
// const getData = "SELECT FROM meetings where user_id = $1";
const insertData = "INSERT INTO meetings (perihal, tempat, tanggal, waktu, status, receiver, participants, deskripsi, user_id, maker, verified) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
const updateData = "UPDATE meetings set perihal = $1, tempat = $2, tanggal = $3, waktu = $4, status = $5, receiver = $6, participants = $7, deskripsi = $8 where id = $9";
const updateDataVerified = "UPDATE meetings set perihal = $1, tempat = $2, tanggal = $3, waktu = $4, status = $5, receiver = $6, participants = $7, deskripsi = $8, verified = $9 where id = $10";
const updateReject = "UPDATE meetings set status = $1, alasan = $2 where id = $3"
const deleteData = "DELETE FROM meetings where id = $1";
const countDataProcess = "SELECT COUNT(*) FROM meetings WHERE status='1'";
const countDataProcessByReceiverByMaker = "SELECT COUNT(*) FROM meetings WHERE (receiver = $1 AND status='1') OR ($2 = ANY(maker) AND status='1')";
const countDataProcessById = "SELECT COUNT(*) FROM meetings WHERE user_id= $1 AND status='1'";
const countDataProcessByReceiver = "SELECT COUNT(*) FROM meetings WHERE receiver = $1 AND status='1'";
const countDataSuccess = "SELECT COUNT(*) FROM meetings WHERE status='2'";
const countDataSuccessByReceiverByMaker = "SELECT COUNT(*) FROM meetings WHERE (receiver = $1 AND status='2') OR ($2 = ANY(maker) AND status='2')";
const countDataSuccessById = "SELECT COUNT(*) FROM meetings WHERE user_id = $1 AND status = '2'";
const countDataSuccessByReceiver = "SELECT COUNT(*) FROM meetings WHERE receiver = $1 AND status='2'";
const countDataSuccessByUsername = "SELECT COUNT(*) FROM meetings WHERE $1 = ANY(participants) AND status = '2'";
const countDataSuccessByIdByReceiver = "SELECT COUNT(*) FROM meetings WHERE (status = '2' AND user_id = $1) or (status = '2' AND receiver = $2)";
const countDataFinished = "SELECT COUNT(*) FROM meetings WHERE status='3'";
const countDataFinishedByReceiverByMaker = "SELECT COUNT(*) FROM meetings WHERE (receiver = $1 AND status='3') OR ($2 = ANY(maker) AND status='3')";
const countDataFinishedByUidByParticipants = "SELECT COUNT(*) FROM meetings WHERE (status = '3' AND user_id = $1) or (status = '3' AND $2 = ANY(participants))";
const countDataFinishedByReceiverByParticipants = "SELECT COUNT(*) FROM meetings WHERE (status = '3' AND receiver = $1) or (status = '3' AND $2 = ANY(participants))";
const countDataFinishedByIdByReceiverByParticipants = "SELECT COUNT(*) FROM meetings WHERE (status = '3' AND user_id = $1) or (status = '3' AND receiver = $2) or (status = '3' AND $3 = ANY(participants))";
const countDataRejectById = "SELECT COUNT(*) FROM meetings WHERE user_id= $1 AND status='4'";

module.exports = {
    getDataAll,
    getDataByDate,
    getDataProcess,
    getDataProcessByStaff,
    getDataProcessById,
    getDataProcessByPosition,
    getDataProcessAndVerified,
    getDataVerified,
    getDataVerifiedByReceiverByMaker,
    getDataVerifiedById,
    getDataVerifiedByUsername,
    getDataVerifiedByPosition,
    getDataVerifiedByIdByPosition,
    getDataVerifiedByDate,
    getDataVerifiedByDateById,
    getDataVerifiedByDateByReceiver,
    getDataVerifiedByDateByParticipants,
    getDataVerifiedByDateByIdByReceiver,
    getDataFinished,
    getDataFinishedByReceiverByMaker,
    getDataFinishedByUidByParticipants,
    getDataFinishedByReceiverByParticipants,
    getDataFinishedByIdByReceiverByParticipants,
    getDataRejectById,
    // getData,
    insertData,
    updateData,
    updateDataVerified,
    updateReject,
    deleteData,
    countDataProcess,
    countDataProcessByReceiverByMaker,
    countDataProcessById,
    countDataProcessByReceiver,
    countDataSuccess,
    countDataSuccessByReceiverByMaker,
    countDataSuccessById,
    countDataSuccessByReceiver,
    countDataSuccessByUsername,
    countDataSuccessByIdByReceiver,
    countDataFinished,
    countDataFinishedByReceiverByMaker,
    countDataFinishedByUidByParticipants,
    countDataFinishedByReceiverByParticipants,
    countDataFinishedByIdByReceiverByParticipants,
    countDataRejectById
}