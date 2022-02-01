const path = require("path");
const controller = require("./shop.controller");
const validate = require(path.join(
  process.cwd(),
  "src/modules/core/middlewares/validate"
));
const {
  shopUploadSchema,
} = require("./shop.schema");

module.exports = (app) => {
  app
    .route("/api/shops")
    .get(controller.getShops)
    .post(validate(shopUploadSchema), controller.addShop);
};
