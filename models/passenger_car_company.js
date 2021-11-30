'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerCarCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip, Vehicle }) {
      // define association here
      this.belongsTo(Trip, { foreignKey: "trip_id" });
      this.hasMany(Vehicle, { foreignKey: "passengerCarCompanies_id" });
    }
  };
  PassengerCarCompany.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'PassengerCarCompanies',
  });
  return PassengerCarCompany;
};