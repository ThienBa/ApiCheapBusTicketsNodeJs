const { Trip, Station, sequelize } = require('../models');

const createTripController = async (req, res) => {
    const { fromStation, toStation, startTime, price } = req.body;
    try {
        const newTrip = await Trip.create({ fromStation, toStation, startTime, price });
        res.status(201).send(newTrip);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllTripPassengerCarCompanyVehicle = async (req, res) => {
    const { fromStation, toStation, startTime } = req.query;
    try {
        const [result] = await sequelize.query(`
            select fromStation.name as formStation, toStation.name as toStation, vehicles.name as nameVehicle,trips.price as priceTicket, trips.startTime as startTime, passengercarcompanies.name as passengerCarCompany from trips
            inner join stations as fromStation
            on fromStation.id = trips.fromStation
            inner join stations as toStation
            on toStation.id = trips.toStation
            inner join passengercarcompanies 
            on trips.id = passengercarcompanies.trip_id
            inner join vehicles
            on passengercarcompanies.id = vehicles.passengercarcompanies_id
            inner join seats
            on vehicles.id = seats.vehicle_id
            where fromStation.province = "${fromStation}" && toStation.province = "${toStation}" && trips.startTime = "${startTime}"
        `);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllTripController = async (req, res) => {
    try {
        const tripList = await Trip.findAll({
            include: [
                {
                    model: Station,
                    as: "from"
                },
                {
                    model: Station,
                    as: "to"
                }
            ]
        });
        res.status(200).send(tripList);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailTripController = async (req, res) => {
    const { id } = req.params;
    try {
        const tripDetail = await Trip.findOne({
            where: { id },
            include: [
                {
                    model: Station,
                    as: "from"
                },
                {
                    model: Station,
                    as: "to"
                }
            ]
        });
        res.status(200).send(tripDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateTripController = async (req, res) => {
    const { id } = req.params;
    const { fromStation, toStation, startTime, price } = req.body;
    try {
        await Trip.update({ fromStation, toStation, startTime, price }, { where: { id } });
        res.status(200).send(`Update trip with id ${id} successfully`);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteTripController = async (req, res) => {
    const { id } = req.params;
    try {
        await Trip.destroy({ where: { id } });
        res.status(200).send(`Delete trip with id ${id} successfully!`);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createTripController,
    getAllTripController,
    getDetailTripController,
    updateTripController,
    deleteTripController,
    getAllTripPassengerCarCompanyVehicle
}
