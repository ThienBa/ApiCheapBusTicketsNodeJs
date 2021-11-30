const { Seat } = require('../models');

const createSeatController = async (req, res) => {
    const { name, vehicle_id, status } = req.body;

    try {
        const newSeat = await Seat.create({ name, vehicle_id, status });
        res.status(201).send(newSeat);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllSeatController = async (req, res) => {
    try {
        const SeatList = await Seat.findAll();
        res.status(200).send(SeatList);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailSeatController = async (req, res) => {
    const { id } = req.params;
    try {
        const SeatDetail = await Seat.findOne({ where: { id } });
        res.status(200).send(SeatDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateSeatController = async (req, res) => {
    const { id } = req.params;
    const { name, vehicle_id, status } = req.body;
    try {
        const SeatUpdate = await Seat.findOne({ where: { id } });
        SeatUpdate.name = name;
        SeatUpdate.vehicle_id = vehicle_id;
        SeatUpdate.status = status;
        await SeatUpdate.save();
        res.status(200).send(SeatUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteSeatController = async (req, res) => {
    const { id } = req.params;
    try {
        await Seat.destroy({ where: { id } });
        res.status(200).send("Delete seat successfully!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createSeatController,
    getAllSeatController,
    getDetailSeatController,
    updateSeatController,
    deleteSeatController
}
