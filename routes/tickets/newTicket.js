const express = require("express");
const newTicketController = require("../../controllers/ticketControllers/newTicketController");
const router = express.Router();
router.post("/", newTicketController.newTicket);

module.exports = router;
