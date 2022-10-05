const {DataTypes} = require('sequelize')
const sequelize = require('../../config/database')

const userSignup = sequelize.define("userSignup", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = userSignup;