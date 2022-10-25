const userSignup = require('../../models/auth/signup')
const userSignIn = require('../../models/auth/signin')
const jwt = require("jsonwebtoken");
exports.userSignInController = async(req,res) =>{
   const {email,password} = req.body
   const userExist = await userSignup
     .findOne({ where: { email } })
     .catch((err) => {
       console.log("Error Occured in Finding User", err);
     });
   
   if (!userExist){
     return res.status(404).json({ message: "Invalid user , Please Sign Up" });
   }
   if (userExist.password =! password) {
     return res.status(404).json({
       message: "Email Or Password is required",
     });

   }
   const jwtToken = jwt.sign({ id: userExist.id, email: userExist.email },process.env.JWT_SECRET_TOKEN);
   res.status(200).json({ message: "Login Successful", token: jwtToken });

}