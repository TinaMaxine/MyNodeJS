const User = require('../models/users');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    const result = await user.save();
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
