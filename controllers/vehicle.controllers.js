const { Vehicle } = require('../models');

const createVehicleController = async (req, res) => {
    const { name, passengerCarCompanies_id } = req.body;

    try {
        const newVehicle = await Vehicle.create({ name, passengerCarCompanies_id });
        res.status(201).send(newVehicle);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllVehicleController = async (req, res) => {
    try {
        const VehicleList = await Vehicle.findAll();
        res.status(200).send(VehicleList);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailVehicleController = async (req, res) => {
    const { id } = req.params;
    try {
        const VehicleDetail = await Vehicle.findOne({ where: { id } });
        res.status(200).send(VehicleDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateVehicleController = async (req, res) => {
    const { id } = req.params;
    const { name, passengerCarCompanies_id } = req.body;
    try {
        const VehicleUpdate = await Vehicle.findOne({ where: { id } });
        VehicleUpdate.name = name;
        VehicleUpdate.passengerCarCompanies_id = passengerCarCompanies_id;
        await VehicleUpdate.save();
        res.status(200).send(VehicleUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteVehicleController = async (req, res) => {
    const { id } = req.params;
    try {
        await Vehicle.destroy({ where: { id } });
        res.status(200).send("Delete Vehicle successfully!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createVehicleController,
    getAllVehicleController,
    getDetailVehicleController,
    updateVehicleController,
    deleteVehicleController
}
