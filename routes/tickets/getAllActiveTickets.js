const express = require("express");
const getAllActiveTicketsController = require("../../controllers/ticketControllers/getAllActiveTicketsController");
const router = express.Router();
router.get("/", getAllActiveTicketsController.getAllActiveTickets);

module.exports = router;
