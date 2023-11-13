'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokedexes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pokedex_number: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      german_name: {
        type: Sequelize.STRING
      },
      japanese_name: {
        type: Sequelize.STRING
      },
      generation: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.STRING
      },
      type_number: {
        type: Sequelize.INTEGER
      },
      type_1: {
        type: Sequelize.STRING
      },
      type_2: {
        type: Sequelize.STRING
      },
      height_m: {
        type: Sequelize.FLOAT
      },
      weight_kg: {
        type: Sequelize.FLOAT
      },
      abilities_number: {
        type: Sequelize.INTEGER
      },
      ability_1: {
        type: Sequelize.STRING
      },
      ability_2: {
        type: Sequelize.STRING
      },
      ability_hidden: {
        type: Sequelize.STRING
      },
      total_points: {
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER
      },
      attack: {
        type: Sequelize.INTEGER
      },
      defense: {
        type: Sequelize.INTEGER
      },
      sp_attack: {
        type: Sequelize.INTEGER
      },
      sp_defense: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      catch_rate: {
        type: Sequelize.INTEGER
      },
      base_friendship: {
        type: Sequelize.INTEGER
      },
      base_experience: {
        type: Sequelize.INTEGER
      },
      growth_rate: {
        type: Sequelize.STRING
      },
      egg_type_number: {
        type: Sequelize.INTEGER
      },
      egg_type_1: {
        type: Sequelize.STRING
      },
      egg_type_2: {
        type: Sequelize.STRING
      },
      percentage_male: {
        type: Sequelize.FLOAT
      },
      egg_cycles: {
        type: Sequelize.INTEGER
      },
      against_normal: {
        type: Sequelize.INTEGER
      },
      against_fire: {
        type: Sequelize.FLOAT
      },
      against_water: {
        type: Sequelize.FLOAT
      },
      against_electric: {
        type: Sequelize.FLOAT
      },
      against_grass: {
        type: Sequelize.FLOAT
      },
      against_ice: {
        type: Sequelize.FLOAT
      },
      against_fight: {
        type: Sequelize.FLOAT
      },
      against_poison: {
        type: Sequelize.FLOAT
      },
      against_ground: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pokedexes');
  }
};