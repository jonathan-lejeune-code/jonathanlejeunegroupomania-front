'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.associate = function (models) {
        User.hasMany(models.Message, {
          //un user peut-être lié à plusieurs messages (relation un à plusieurs)
          //association
          foreignKey: "userId",
          onDelete: "CASCADE",
        });
      return User;
    };
    User.hasMany(
      models.Comment,
      { foreignKey: "userId" },
      { onDelete: "cascade" }
    ); 
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
};

