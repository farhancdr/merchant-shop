const { object, string, number } = require("yup");

const shopUploadSchema = object().shape({
    shop_name: string()
        .min(3, "Shop name must be at least 3 characters.")
        .max(255, "Shop name must be at most 255 characters long.")
        .required("Shop name is required."),
    trade_license_number: string()
        .min(3, "Trade license number must be at least 3 characters.")
        .max(255, "Trade license number must be at most 255 characters long.")
        .required("Trade license number is required."),
    age_of_shop: number()
        .min(1, "Age of shop must be at least 1.")
        .max(100, "Age of shop must be at most 255.")
        .required("Age of shop is required."),
});

module.exports.shopUploadSchema = shopUploadSchema;
