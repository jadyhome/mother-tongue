"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Save extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Save.init(
    {
      input_id: DataTypes.INTEGER,
      output_id: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Save",
      tableName: "saves",
    }
  );
  return Save;
};
