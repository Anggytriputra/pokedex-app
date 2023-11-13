const { pokedexControllers } = require("../controllers");
const pokedexRouters = require("express").Router();

pokedexRouters.get("/", pokedexControllers.getPokedex);
pokedexRouters.get("/visualization", pokedexControllers.getVisualizationPK);

module.exports = pokedexRouters;
