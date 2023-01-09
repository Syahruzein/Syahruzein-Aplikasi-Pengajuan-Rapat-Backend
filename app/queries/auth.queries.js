const getDataAll = "SELECT * FROM users"
const getDataAll2 = 'SELECT u.*, r.* FROM users u JOIN user_roles uu ON uu."userId" = u.id JOIN   roles r ON uu."roleId" = r.id'
const getDataExcept = "SELECT * FROM users WHERE NOT username = $1 AND NOT username = 'admin'"
const getDataExceptSubmission = "SELECT * FROM users WHERE NOT username = $1 AND NOT position = $2 AND NOT username = 'admin'"
const getDataExecutive = "SELECT * FROM users WHERE position IS NOT NULL"
const getNameVerified = "SELECT * FROM users where position = $1"
const getDataDireksi = "SELECT * FROM users WHERE position IN ('Direktur', 'Wakil Direktur Bidang Akademik', 'Wakil Direktur Bidang Umum dan Keuangan', 'Wakil Direktur Bidang Kemahasiswaan dan Sumber Daya Manusia', 'Wakil Direktur Bidang Kerjasama dan Teknologi' )"
const getDataDirektur = "SELECT * FROM users WHERE position = 'Direktur'";

module.exports = {
    getDataAll,
    getDataAll2,
    getDataExcept,
    getDataExceptSubmission,
    getDataExecutive,
    getNameVerified,
    getDataDireksi,
    getDataDirektur
}