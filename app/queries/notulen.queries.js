const getDataFinished = "SELECT * FROM notulens WHERE meet_id = $1";
const insertData = "INSERT INTO notulens (notulen, meet_id, maker) values ($1, $2, $3)";
const updateData = "UPDATE notulens set notulen = $1 WHERE meet_id = $2";
const deleteData = "DELETE FROM notulens where id = $1";
const countDataFinished = "SELECT COUNT(*) FROM notulens";

module.exports = {
    getDataFinished,
    insertData,
    updateData,
    deleteData,
    countDataFinished
}