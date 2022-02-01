const path = require("path");
const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));
const { DataTypes } = require('sequelize');

const ImageFile = sequelize.define('imageFiles', {
    file_name : {
        type: DataTypes.STRING(255)
    },
    image_path: {
        type: DataTypes.STRING(1024)
    },
    created_by: {
        type: DataTypes.DATE
    },
    updated_by: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'imageFiles',
    timestamps: true,
    createdAt: 'created_by',
    updatedAt: 'updated_by'
});

module.exports = ImageFile;