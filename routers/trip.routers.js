const express = require('express');
const { createTripController, getAllTripController, getDetailTripController, updateTripController, deleteTripController, getAllTripPassengerCarCompanyVehicle } = require('../controllers/trip.controllers');
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');
const { checkExist } = require('../middlewares/validations/checkExist');
const { Trip } = require('../models');
const tripRouter = express.Router();

tripRouter.post("/", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), createTripController);
tripRouter.get("/getAllTripPassengerCarCompanyVehicle", getAllTripPassengerCarCompanyVehicle);
tripRouter.get("/", getAllTripController);
tripRouter.get("/:id", getDetailTripController);
tripRouter.put("/:id", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Trip), updateTripController);
tripRouter.delete("/:id", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Trip), deleteTripController);

module.exports = {
    tripRouter,
}