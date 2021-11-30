const { Ticket } = require('../models');

const createTicketController = async (req, res) => {
    const { trip_id, user_id } = req.body;
    try {
        const newTicket = await Ticket.create({ trip_id, user_id });
        res.status(201).send(newTicket);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllTicketController = async (req, res) => {
    try {
        const TicketList = await Ticket.findAll();
        res.status(200).send(TicketList);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailTicketController = async (req, res) => {
    const { id } = req.params;
    try {
        const TicketDetail = await Ticket.findOne({
            where: { id }
        });
        res.status(200).send(TicketDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateTicketController = async (req, res) => {
    const { id } = req.params;
    const { trip_id, user_id } = req.body;
    try {
        const TicketUpdate = await Ticket.findOne({ where: { id } });
        TicketUpdate.trip_id = trip_id;
        TicketUpdate.user_id = user_id;
        await TicketUpdate.save();
        res.status(200).send(TicketUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteTicketController = async (req, res) => {
    const { id } = req.params;
    try {
        await Ticket.destroy({ where: { id } });
        res.status(200).send("Delete ticket successfully!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createTicketController,
    getAllTicketController,
    getDetailTicketController,
    updateTicketController,
    deleteTicketController
}
