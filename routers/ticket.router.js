const express = require('express');
const { createTicketController, getAllTicketController, getDetailTicketController, updateTicketController, deleteTicketController } = require('../controllers/ticket.controller');
const ticketRouter = express.Router();

ticketRouter.post("/", createTicketController);
ticketRouter.get("/", getAllTicketController);
ticketRouter.get("/:id", getDetailTicketController);
ticketRouter.put("/:id", updateTicketController);
ticketRouter.delete("/:id", deleteTicketController);

module.exports = {
    ticketRouter,
}