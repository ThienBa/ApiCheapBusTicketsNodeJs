'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Station, Ticket, PassengerCarCompanies }) {
      // define association here
      this.belongsTo(Station, { foreignKey: "fromStation", as: "from" });
      this.belongsTo(Station, { foreignKey: "toStation", as: "to" });
      this.hasMany(Ticket, { foreignKey: "trip_id" });
      this.hasMany(PassengerCarCompanies, { foreignKey: "trip_id" });
    }
  };
  Trip.init({
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};