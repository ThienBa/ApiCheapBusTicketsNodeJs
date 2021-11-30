const multer = require('multer');
const mkdirp = require('mkdirp');

const uploadImage = (type) => {
    mkdirp.sync(`./public/images/${type}`);
    const storage = multer.diskStorage({
        //Config default path upload
        destination: function (req, file, cb) {
            cb(null, `./public/images/${type}`);
        },

        //Upload image name format
        filename: function (req, file, cb) {
            cb(null, Date.now() + "_" + file.originalname);
        }
    });

    const upload = multer({
        storage: storage,

        //Filter out the correct image format
        fileFilter: function (req, file, cb) {
            const extensionFileList = [".png", ".jpg"];
            const extension = file.originalname.slice(-4);
            const checkExtensionIsImage = extensionFileList.includes(extension);
            if (checkExtensionIsImage) {
                cb(null, true);
            } else {
                cb(new Error("The file is not in the correct image format!"));
            }
        },

        //Filter out the right size
        limits: { fileSize: 2000000 }
    });

    return upload.single(type);
}

module.exports = {
    uploadImage,
}