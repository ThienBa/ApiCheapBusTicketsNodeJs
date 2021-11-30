const { User, sequelize } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');

const registerController = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    try {
        //Create avatar default
        const urlImageAvatar = gravatar.url(email);
        //Create random string
        const salt = bcrypt.genSaltSync(10);
        //Encode password + salt
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, email, password: hashPassword, phoneNumber, avatar: urlImageAvatar });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        const isAuth = bcrypt.compareSync(password, user.password);
        if (isAuth) {
            const token = jwt.sign({ email: user.email, type: user.type }, "cheap_bus_ticket", { expiresIn: 60 * 60 });
            res.status(200).send({ message: "Login successfully!", content: user, token });
        } else {
            res.status(500).send("Email or password is invalid!");
        }
    } else {
        res.status(404).send("Email does not exist!");
    }
}

const uploadAvatar = async (req, res) => {
    const { user, file } = req;
    const urlImage = `http://localhost:3000/${file.path}`;
    const userFound = await User.findOne({ where: { email: user.email } });
    userFound.avatar = urlImage;
    userFound.save();
    res.status(200).send({ message: "File upload feature is run!", content: userFound });
}

const getAllTrip = async (req, res) => {
    try {
        const [result] = await sequelize.query(`
            select users.name as userName, fromStation.name as fromStation, toStation.name as toStation from users
            inner join tickets
            on users.id = tickets.user_id
            inner join trips
            on trips.id = tickets.trip_id
            inner join stations as fromStation
            on fromStation.id = trips.fromStation
            inner join stations as toStation
            on toStation.id = trips.toStation
        `);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }

}

const getAllUserController = async (req, res) => {
    try {
        const UserList = await User.findAll();
        res.status(200).send(UserList);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailUserController = async (req, res) => {
    const { id } = req.params;
    try {
        const UserDetail = await User.findOne({ where: { id } });
        res.status(200).send(UserDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateUserController = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, phoneNumber } = req.body;
    try {
        const UserUpdate = await User.findOne({ where: { id } });
        UserUpdate.name = name;
        UserUpdate.email = email;
        UserUpdate.password = password;
        UserUpdate.phoneNumber = phoneNumber;
        await UserUpdate.save();
        res.status(200).send(UserUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUserController = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.status(200).send("Delete user successfully!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    registerController,
    loginController,
    uploadAvatar,
    getAllTrip,
    getAllUserController,
    getDetailUserController,
    updateUserController,
    deleteUserController
}
