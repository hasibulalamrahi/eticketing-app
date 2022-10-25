
const newTicket = require("../../models/tickets/newTicket");


exports.getAllActiveTickets = async(req,res) =>{
    const getAllActiveTicketInfo = await newTicket
      .findAll(
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
          where: {
            isActive: true,
          }
        }
      )
      .catch((err) => {
        console.log("Some Error Occured in Saving Ticket", err);
        res.json({ message: "Some Problems Occured in Creating New Ticket" });
      });
    res.status(200).send({ availableTickets: getAllActiveTicketInfo });
}