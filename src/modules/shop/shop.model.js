const path = require("path");
const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));
const { DataTypes } = require('sequelize');

const Shop = sequelize.define('shops', {
    merchant_id:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    shop_name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    shop_category: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    trade_license_number: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    age_of_shop: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    shop_image:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    created_by: {
        type: DataTypes.DATE
    },
    updated_by: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'shops',
    timestamps: true,
    createdAt: 'created_by',
    updatedAt: 'updated_by'
});

module.exports = Shop;