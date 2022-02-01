const ImageFile = require("./image.model");

async function uploadImage(req, res) {
    try {
        const { originalname, destination } = req.file;
        await ImageFile.create({
            file_name: originalname,
            image_path: destination
        }
        );
        res.status(201).send("Image uploaded successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

module.exports.uploadImage = uploadImage;