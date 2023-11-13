const db = require("../models");
const { Op, Sequelize } = require("sequelize");
const sequelize = db.sequelize;

async function getPokedex(req, res) {
  try {
    console.log("req. query", req.query);
    const lastId = parseInt(req.query.lastId) || 0;
    const limit = parseInt(req.query.limit) || 10;

    let result = [];

    if (lastId < 1) {
      const results = await db.pokedex.findAll({
        // attributes: ["id", "name"],
        limit: limit,
        order: [["id", "DESC"]],
      });
      result = results;
    } else {
      console.log("test");
      const results = await db.pokedex.findAll({
        // attributes: ["id", "name"],
        where: {
          id: {
            [Op.lt]: lastId,
          },
        },
        limit: limit,
        order: [["id", "DESC"]],
      });
      result = results;
    }

    res.status(200).send({
      message: "Succesfully get name pokedox",
      result: result,
      lastId: result.length ? result[result.length - 1].id : 0,
      hasMore: result.length >= limit ? true : false,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).send(error);
  }
}

async function getVisualizationPK(req, res) {
  try {
    const totalGeneration = await sequelize.query(
      `SELECT generation, COUNT(*) as count
      FROM pokedexes
      GROUP BY generation
      HAVING COUNT(*) > 0
      ORDER BY count DESC;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    const totaltype = await sequelize.query(
      `SELECT type_1,COUNT(*) as count
      FROM pokedexes
      GROUP BY type_1
      HAVING COUNT(*) > 0
      order by count desc;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    const topFivePoint = await sequelize.query(
      `SELECT id, name, total_points
      FROM pokedexes
      ORDER BY total_points DESC
      LIMIT 5;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    const avgStatusAttack = await sequelize.query(
      `SELECT
      status,
      ROUND(AVG(attack), 0) AS rounded_average_attack
    FROM
      pokedexes
    GROUP BY
      status;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    res.status(200).json({
      message: "Successfully get data visualization",
      totalGeneration,
      totaltype,
      topFivePoint,
      avgStatusAttack,
    });
  } catch (error) {
    console.error(error); // Cetak pesan kesalahan untuk debugging
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getPokedex,
  getVisualizationPK,
};
