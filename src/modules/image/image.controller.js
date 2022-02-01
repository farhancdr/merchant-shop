const Shop = require("../shop/shop.model");
const ImageFile = require("./image.model");

async function uploadImage(req, res) {
    try {
        await ImageFile.create({
            image_path: JSON.stringify(req.file)
        }
        );
        res.status(201).send("Image uploaded successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

module.exports.uploadImage = uploadImage;