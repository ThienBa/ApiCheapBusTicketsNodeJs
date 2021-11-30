const express = require('express');
const { createSeatController, getAllSeatController, getDetailSeatController, updateSeatController, deleteSeatController } = require('../controllers/seat.controller');
const seatRouter = express.Router();

seatRouter.post("/", createSeatController);
seatRouter.get("/", getAllSeatController);
seatRouter.get("/:id", getDetailSeatController);
seatRouter.put("/:id", updateSeatController);
seatRouter.delete("/:id", deleteSeatController);

module.exports = {
    seatRouter,
}