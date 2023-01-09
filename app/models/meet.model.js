module.exports = (sequelize, Sequelize) => {
    const Meet = sequelize.define("meetings", {
        perihal: {
            type: Sequelize.STRING
        },
        tempat: {
            type: Sequelize.STRING
        },
        tanggal: {
            type: Sequelize.DATE
        },
        waktu: {
            type: Sequelize.TIME,
        },
        status: {
            type: Sequelize.STRING(1),
            comment: '1=process, 2=verified, 3=finished, 4=rejected'
        },
        receiver: {
            type: Sequelize.STRING
        },
        participants: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        deskripsi: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.STRING,
        },
        maker: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        alasan: {
            type: Sequelize.STRING
        },
        verified: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        }
    });
    return Meet;
};