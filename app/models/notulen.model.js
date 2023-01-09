module.exports = (sequelize, Sequelize) => {
    const Notulen = sequelize.define("notulens", {
        notulen: {
            type: Sequelize.STRING
        },
        meet_id: {
            type: Sequelize.STRING
        },
        maker: {
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
    return Notulen;
}