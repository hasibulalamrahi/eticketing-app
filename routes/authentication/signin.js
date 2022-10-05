const express = require("express");
const signInController = require("../../controllers/authenticationController/signIn");
const router = express.Router();
router.post("/", signInController.userSignInController);

module.exports = router;
