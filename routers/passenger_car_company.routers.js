const express = require('express');
const { createPassengerCarCompanyController, getAllPassengerCarCompanyController, getDetailPassengerCarCompanyController, updatePassengerCarCompanyController, deletePassengerCarCompanyController } = require('../controllers/passenger_car_company.controllers');
const passengerCarCompanyRouter = express.Router();

passengerCarCompanyRouter.post("/", createPassengerCarCompanyController);
passengerCarCompanyRouter.get("/", getAllPassengerCarCompanyController);
passengerCarCompanyRouter.get("/:id", getDetailPassengerCarCompanyController);
passengerCarCompanyRouter.put("/:id", updatePassengerCarCompanyController);
passengerCarCompanyRouter.delete("/:id", deletePassengerCarCompanyController);


module.exports = {
    passengerCarCompanyRouter,
}