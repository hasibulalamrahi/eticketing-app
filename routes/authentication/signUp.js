const express = require("express")
const signupController = require("../../controllers/authenticationController/signupController")
const router = express.Router()
router.post("/", signupController.userSignupController);

module.exports = router ;