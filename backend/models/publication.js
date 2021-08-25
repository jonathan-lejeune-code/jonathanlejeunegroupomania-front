'use strict';
module.exports = (sequelize, DataTypes) => {
    const Publication = sequelize.define(
        'Publication', {
            title: DataTypes.STRING,
            userId: DataTypes.INTEGER,
            content: DataTypes.STRING,
            attachment: DataTypes.STRING,
            likes: DataTypes.INTEGER
        }, {}
    );

    Publication.associate = function (models) {
        models.Publication.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Publication;
};