const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const { rootRouter } = require('./routers');
const expressFingerPrint = require('express-fingerprint');
const app = express();

//Use finger print
app.use(expressFingerPrint());

//Setup app json type
app.use(express.json());

//Setup static file
const publicPathDirectory = path.join(__dirname, './public');
app.use("/public", express.static(publicPathDirectory));

//Use router 
app.use("/api/v1", rootRouter);

//Listen for connection events
app.listen(3000, async () => {
    console.log(`Example app listening at http://localhost:3000`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})