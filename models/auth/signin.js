const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const userSignIn = sequelize.define("userSignIn", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = userSignIn;
