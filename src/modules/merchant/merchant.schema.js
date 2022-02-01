const { object, string, number } = require("yup");

const merchantUploadSchema = object().shape({
    merchant_name: string()
        .min(3, "Merchant name must be at least 3 characters.")
        .max(255, "Merchant name must be at most 255 characters long.")
        .required("Merchant name is required."),
    user_name: string()
        .min(3, "User name must be at least 3 characters.")
        .max(255, "User name must be at most 255 characters long.")
        .required("User name is required."),
    phone: string()
        .min(11, "Phone number must be 11 digits.")
        .max(11, "Phone number must be be 11 digits.")
        .required("Phone number is required."),
    email: string()
        .email("Email is invalid.")
        .required("Email is required."),
    nid: string()
        .required("NID is required."),
    subscription_package_id: number()
        .required("Subscription package id is required."),
});

module.exports.merchantUploadSchema = merchantUploadSchema;
