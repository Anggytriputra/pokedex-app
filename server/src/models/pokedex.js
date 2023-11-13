"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pokedex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokedex.init(
    {
      pokedex_number: DataTypes.STRING,
      name: DataTypes.STRING,
      german_name: DataTypes.STRING,
      japanese_name: DataTypes.STRING,
      generation: DataTypes.INTEGER,
      status: DataTypes.STRING,
      species: DataTypes.STRING,
      type_number: DataTypes.INTEGER,
      type_1: DataTypes.STRING,
      type_2: DataTypes.STRING,
      height_m: DataTypes.FLOAT,
      weight_kg: DataTypes.FLOAT,
      abilities_number: DataTypes.INTEGER,
      ability_1: DataTypes.STRING,
      ability_2: DataTypes.STRING,
      ability_hidden: DataTypes.STRING,
      total_points: DataTypes.INTEGER,
      hp: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      defense: DataTypes.INTEGER,
      sp_attack: DataTypes.INTEGER,
      sp_defense: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      catch_rate: DataTypes.INTEGER,
      base_friendship: DataTypes.INTEGER,
      base_experience: DataTypes.INTEGER,
      growth_rate: DataTypes.STRING,
      egg_type_number: DataTypes.INTEGER,
      egg_type_1: DataTypes.STRING,
      egg_type_2: DataTypes.STRING,
      percentage_male: DataTypes.FLOAT,
      egg_cycles: DataTypes.INTEGER,
      against_normal: DataTypes.INTEGER,
      against_fire: DataTypes.FLOAT,
      against_water: DataTypes.FLOAT,
      against_electric: DataTypes.FLOAT,
      against_grass: DataTypes.FLOAT,
      against_ice: DataTypes.FLOAT,
      against_fight: DataTypes.FLOAT,
      against_poison: DataTypes.FLOAT,
      against_ground: DataTypes.FLOAT,
      against_flying: DataTypes.INTEGER,
      against_psychic: DataTypes.INTEGER,
      against_bug: DataTypes.FLOAT,
      against_rock: DataTypes.INTEGER,
      against_ghost: DataTypes.INTEGER,
      against_dragon: DataTypes.INTEGER,
      against_dark: DataTypes.INTEGER,
      against_steel: DataTypes.FLOAT,
      against_fairy: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "pokedex",
      timestamps: false, // Menonaktifkan timestamps
    }
  );
  return pokedex;
};
