const express = require('express');
const fingerPrintRouter = express.Router();

fingerPrintRouter.get("/", (req, res) => {
    res.status(200).send(req.fingerprint);
})

module.exports = {
    fingerPrintRouter,
}