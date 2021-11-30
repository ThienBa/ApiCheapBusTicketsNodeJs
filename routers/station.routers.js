const express = require('express');
const { Station } = require('../models');
const { createStationController, getAllStationController, getDetailStationController, updateStationController, deleteStationController } = require('../controllers/station.controllers');
const { checkExist } = require('../middlewares/validations/checkExist');
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');
const stationRouter = express.Router();

stationRouter.post("/", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), createStationController);
stationRouter.get("/", getAllStationController);
stationRouter.get("/:id", getDetailStationController);
stationRouter.put("/:id", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Station), updateStationController);
stationRouter.delete("/:id", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Station), deleteStationController);

module.exports = {
    stationRouter,
}