"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      attachementuser: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Message, {
      //un user peut-être lié à plusieurs messages (relation un à plusieurs)
      //association
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    
        User.hasMany(
      models.Comment,
      { foreignKey: "userId" },
      { onDelete: "cascade" }
    ); 
  };
  return User;
};