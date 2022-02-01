const path = require("path");
const controller = require("./merchant.controller");
const validate = require(path.join(
  process.cwd(),
  "src/modules/core/middlewares/validate"
));
const {
  merchantUploadSchema,
} = require("./merchant.schema");

module.exports = (app) => {
  app
    .route("/api/merchants")
    .get(controller.getMerchants)
    .post(validate(merchantUploadSchema), controller.addMerchant);

};
