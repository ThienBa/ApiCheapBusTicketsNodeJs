const express = require('express');
const { passengerCarCompanyRouter } = require('./passenger_car_company.routers');
const { seatRouter } = require('./seat.router');
const { stationRouter } = require('./station.routers');
const { fingerPrintRouter } = require('./test-finger-print');
const { ticketRouter } = require('./ticket.router');
const { tripRouter } = require('./trip.routers');
const { userRouter } = require('./user.router');
const { vehicleRouter } = require('./vehicle.router');
const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/passengerCarCompanies", passengerCarCompanyRouter);
rootRouter.use("/vehicle", vehicleRouter);
rootRouter.use("/seats", seatRouter);
rootRouter.use("/tickets", ticketRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/test-finger-print", fingerPrintRouter);

module.exports = {
    rootRouter,
}