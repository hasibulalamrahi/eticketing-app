const express = require("express");
const getTicketsByIdController = require("../../controllers/ticketControllers/getTicketsByIdController");
const router = express.Router();
router.get("/:id", getTicketsByIdController.getTicketsById);

module.exports = router;
