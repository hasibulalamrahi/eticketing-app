const userSignup = require("../../models/auth/signup");

exports.userSignupController = async(req,res)=>{
    const {fullName, nid,phone,email,password} = req.body;
    const alreadyUserExist = await userSignup
      .findOne({ where: { email } })
      .catch((err) => {
        console.log("Error Occured in SignUp Validation", err);
      });
    if (alreadyUserExist){
        return res.status(404).json({ message: "User Already Exists" });
    }
    const newUser = new userSignup({
      fullName,
      nid,
      phone,
      email,
      password
    });
    const saveNewUser = await newUser.save().catch((err)=>{
        console.log("Error Occured in Saving User Info",err)
        res.status(500).json({
          message: "Some Error Occured while user signup",
        });
    })
    if (saveNewUser){
        res.status(200).json({ message: "Thanks for Signup" });
    }
      
}