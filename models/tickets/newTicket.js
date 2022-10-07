const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const newTicket = sequelize.define("newTicket", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  trainName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ticketClass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coachNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seatNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fare: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    enum: [true, false],
    allowNull: false,
    defaultValue: true,
  },
  postedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = newTicket;
