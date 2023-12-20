const mongoose=require('mongoose');
const registerusersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  gender: String,
  password: String,
  confirmpassword: String,
});

const signupusers = new mongoose.model("signupusers", registerusersSchema);
module.exports = signupusers;