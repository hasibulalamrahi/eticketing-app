const newTicket = require("../../models/tickets/newTicket");

exports.getTicketsById = async (req, res) => {
  const {id} = req.params
  const ticketById = await newTicket.findOne({
    attributes: [
      "id",
      "from",
      "to",
      "date",
      "time",
      "trainName",
      "ticketClass",
      "coachNo",
      "seatNo",
      "fare",
      "postedBy",
    ],
    where: { id: id  },
  }).catch((err) => {
    console.log("Some Error Occured in Saving Ticket", err);
    res.json({
      message: "Some Problems Occured while Finding this particular ticket",
    });
  });
  if (!ticketById) {
    res.json({ message: "No Tickets found by this ID" });
  }
  res.json({ ticketDetails: ticketById });
};


