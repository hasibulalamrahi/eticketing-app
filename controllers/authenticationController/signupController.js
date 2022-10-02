exports.userSignupController = async(req,res)=>{
    console.log(req.body)
    res.send({message: "Req is recieved successfully"})
}