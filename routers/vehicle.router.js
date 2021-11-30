const express = require('express');
const { createVehicleController, getAllVehicleController, getDetailVehicleController, updateVehicleController, deleteVehicleController } = require('../controllers/vehicle.controllers');
const vehicleRouter = express.Router();

vehicleRouter.post("/", createVehicleController);
vehicleRouter.get("/", getAllVehicleController);
vehicleRouter.get("/:id", getDetailVehicleController);
vehicleRouter.put("/:id", updateVehicleController);
vehicleRouter.delete("/:id", deleteVehicleController);

module.exports = {
    vehicleRouter,
}