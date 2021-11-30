const express = require('express');
const { registerController, getAllUserController, getDetailUserController, updateUserController, deleteUserController, loginController, uploadAvatar, getAllTrip } = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/auth/authenticate');
const { uploadImage } = require('../middlewares/upload/upload-image');
const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
//Upload file
userRouter.post("/upload-avatar", authenticate, uploadImage("avatar"), uploadAvatar);
userRouter.get("/getAllTrip", getAllTrip)
userRouter.get("/", getAllUserController);
userRouter.get("/:id", getDetailUserController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

module.exports = {
    userRouter,
}