const multer = require("../../config/lib/multer");
const controller = require("./image.controller");
const { validateFile } = require("./image.schema");

module.exports = (app) => {

  app.route("/api/uploadImage/")
    .post(validateFile(multer.single('image_file')), controller.uploadImage)
};
