const path = require("path");
const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));
const { DataTypes } = require('sequelize');

const ImageFile = sequelize.define('imageFiles', {
    image_path: {
        type: DataTypes.STRING(1024)
    }
}, {
    tableName: 'imageFiles',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = ImageFile;