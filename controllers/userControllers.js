const User = require("../model/userSchema");

const registerUser = async (req, res, next) => {
  const { name, email, message } = req.body;
  const doesUserExist = await User.findOne({ email });
  console.log(doesUserExist,'register')
  if (doesUserExist) {
    return res.status(400).send({d:"User already exist",doesUserExist:doesUserExist.toString()});
  }
  const user = await User.create({ name, email, message });
  if (user) {
    const sendUser = {
      name: user.name,
      email: user.email,
      message: user.message,
    };
    return res.status(201).send({ ...sendUser });
  } else {
    return res.status(400).send({ error: "User not created" });
  }
  return null;
};

module.exports = {registerUser};
