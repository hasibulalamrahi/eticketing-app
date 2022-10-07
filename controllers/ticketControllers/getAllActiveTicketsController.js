
const newTicket = require("../../models/tickets/newTicket");


exports.getAllActiveTickets = async(req,res) =>{
    const getAllActiveTicketInfo = await newTicket
      .findAll(
        {
          where: {
            isActive: true,
          },
        },
        {
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
        }
      )
      .catch((err) => {
        console.log("Some Error Occured in Saving Ticket", err);
        res.json({ message: "Some Problems Occured in Creating New Ticket" });
      });
    res.send({ availableTickets: getAllActiveTicketInfo });
}