'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      // define association here
      this.hasMany(Trip, { foreignKey: "fromStation", as: "from" });
      this.hasMany(Trip, { foreignKey: "toStation", as: "to" });
    }
  };
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 150],
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        checkLength(value) {
          if (value.length >= 5 && value.length <= 200) {
            return true;
          } else {
            throw new Error("Address must be between 5 and 200 characters!")
          }
        },
      }
    },
    province: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['TP.HCM', 'HN', 'CT', 'DN']],
      }
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};