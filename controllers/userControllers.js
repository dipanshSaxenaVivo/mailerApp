const User = require("../model/userSchema");
const mongo = require('mongodb')

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

const removeUser = async(req,res,next)=>{
    const {id,email} = req.body
    if(id){
        try {
          await  User.deleteOne({_id:new mongo.ObjectId(id)})
            return res.status(200).send('deleted successfully')
        } catch (error) {
            return res.status(400).send({error:error})
        }
    }
    if(email){
        try {
          await  User.deleteOne({email})
            return res.status(200).send('deleted successfully')
        } catch (error) {
            return res.status(400).send({error:error})
        }
    }
    return null
}
module.exports = {registerUser,removeUser};
