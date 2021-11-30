'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ PassengerCarCompanies, Seat }) {
      // define association here
      this.belongsTo(PassengerCarCompanies, { foreignKey: "passengerCarCompanies_id" });
      this.hasMany(Seat, { foreignKey: "vehicle_id" });
    }
  };
  Vehicle.init({
    name: DataTypes.STRING,
    passengerCarCompanies_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};