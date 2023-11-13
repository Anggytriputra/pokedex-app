const db = require("../models");
const sequelize = db.sequelize;
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

async function register(req, res) {
  try {
    console.log("req body", req.body);
    const { username, password, passwordConfirm } = req.body;

    if (!username || !password || !passwordConfirm)
      return res.status(400).send({
        message: "Please complete your data",
      });

    const userExist = await db.users.findOne({
      where: { username: username },
    });

    if (userExist)
      return res.status(400).send({ message: "Username already exist" });

    if (password !== passwordConfirm)
      return res.status(400).send({
        message: "Password does not match",
      });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await db.users.create({
      username: username,
      password: hashPassword,
    });

    return res.status(200).send({
      message: "Register Succefully ",
    });
  } catch (error) {
    console.log("err register", error);
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    console.log("req login", req.body);

    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).send({
        message: "Please complete your data",
      });

    const userExist = await db.users.findOne({
      attributes: ["id", "username", "password"],
      where: { username: username },
    });

    if (!userExist)
      return res.status(400).send({ message: "Username not found" });

    const isvalid = await bcrypt.compare(password, userExist.password);
    if (!isvalid) return res.status(400).send({ message: "Wrong password" });

    const generateToken = nanoid();

    await db.token.update(
      {
        valid: false,
      },
      {
        where: { user_id: userExist.dataValues.id },
      }
    );

    const token = await db.token.create({
      user_id: userExist.dataValues.id,
      token: generateToken,
      valid: true,
    });

    delete userExist.dataValues.password;

    return res.status(200).send({
      message: "Login Succefully",
      userExist,
      token: token.dataValues.token,
    });
  } catch (error) {
    console.log("err login", error);
    res.status(400).json(error);
  }
}

async function getUserByToken(req, res) {
  try {
    const { token } = req.params;
    console.log("token get user", token);

    const userToken = await db.token.findOne({
      where: {
        token,
        valid: true,
      },
    });
    const findUser = await db.users.findOne({
      where: {
        id: userToken.dataValues.user_id,
      },
    });

    delete findUser.dataValues.password;

    return res
      .status(200)
      .send({ message: "Success get User", user: findUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = { register, login, getUserByToken };
