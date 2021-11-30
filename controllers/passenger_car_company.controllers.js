const { PassengerCarCompanies } = require('../models');

const createPassengerCarCompanyController = async (req, res) => {
    const { name, image, description, trip_id } = req.body;
    try {
        const newPassengerCarCompany = await PassengerCarCompanies.create({ name, image, description, trip_id });
        res.status(201).send(newPassengerCarCompany);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllPassengerCarCompanyController = async (req, res) => {
    try {
        const PassengerCarCompanyList = await PassengerCarCompanies.findAll();
        res.status(200).send(PassengerCarCompanyList);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailPassengerCarCompanyController = async (req, res) => {
    const { id } = req.params;
    try {
        const PassengerCarCompanyDetail = await PassengerCarCompanies.findOne({
            where: { id }
        });
        res.status(200).send(PassengerCarCompanyDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updatePassengerCarCompanyController = async (req, res) => {
    const { id } = req.params;
    const { name, image, description, trip_id } = req.body;
    try {
        const PassengerCarCompanyUpdate = await PassengerCarCompanies.findOne({ where: { id } });
        PassengerCarCompanyUpdate.name = name;
        PassengerCarCompanyUpdate.image = image;
        PassengerCarCompanyUpdate.description = description;
        PassengerCarCompanyUpdate.trip_id = trip_id;
        await PassengerCarCompanyUpdate.save();
        res.status(200).send(PassengerCarCompanyUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deletePassengerCarCompanyController = async (req, res) => {
    const { id } = req.params;
    try {
        await PassengerCarCompanies.destroy({ where: { id } });
        res.status(200).send("Delete passenger car company successfully!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createPassengerCarCompanyController,
    getAllPassengerCarCompanyController,
    getDetailPassengerCarCompanyController,
    updatePassengerCarCompanyController,
    deletePassengerCarCompanyController
}
