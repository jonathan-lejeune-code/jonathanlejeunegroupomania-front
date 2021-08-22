"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      messageId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, {
      foreignKey: "userId",
    }); //plusieurs messages peuvent-être lié à un user
    Comment.belongsTo(models.Message, {
      //plusieurs commentaires peuvent-être lié à un user
      foreignKey: "messageId",
      onDelete: "CASCADE", 
    });
  };
  return Comment;
}; 