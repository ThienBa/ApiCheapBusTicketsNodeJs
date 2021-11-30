const { Op } = require('sequelize');
const { Station } = require('../models');

const createStationController = async (req, res) => {
    const { name, address, province } = req.body;
    try {
        const newStation = await Station.create({ name, address, province });
        res.status(201).send(newStation);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllStationController = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const stationSeachList = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            res.status(200).send(stationSeachList);
        } else {
            const stationList = await Station.findAll();
            res.status(200).send(stationList);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailStationController = async (req, res) => {
    const { id } = req.params;
    try {
        const stationDetail = await Station.findOne({
            where: { id }
        });
        res.status(200).send(stationDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateStationController = async (req, res) => {
    const { id } = req.params;
    const { name, address, province } = req.body;
    try {
        const stationUpdate = await Station.findOne({ where: { id } });
        stationUpdate.name = name;
        stationUpdate.address = address;
        stationUpdate.province = province;
        await stationUpdate.save();
        res.status(200).send(stationUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteStationController = async (req, res) => {
    const { id } = req.params;
    try {
        await Station.destroy({ where: { id } });
        res.status(200).send("Delete station successfully!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createStationController,
    getAllStationController,
    getDetailStationController,
    updateStationController,
    deleteStationController
}
