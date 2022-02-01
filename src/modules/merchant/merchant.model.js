const path = require("path");
const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));
const { DataTypes } = require('sequelize');

const Merchant = sequelize.define('merchants', {
    merchant_name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    user_name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    phone: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    nid:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    subscription_package_id: {
        type: DataTypes.INTEGER,
    },
    account_creation_date: {
        type: DataTypes.DATE,
    },
    subscription_end_date: {
        type: DataTypes.DATE,
    },
    used_referral_code: {
        type: DataTypes.STRING,
    },
    updated_by: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'merchants',
    timestamps: true,
    createdAt: 'account_creation_date',
    updatedAt: 'updated_by'
});

module.exports = Merchant;