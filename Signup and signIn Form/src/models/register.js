const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    gender:String,
    password:String,
    confirmpassword:String
})

const registerUser = new mongoose.model('registeruser', userSchema);
module.exports= registerUser;