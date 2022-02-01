const Shop = require("./shop.model");

const getShops = async (req, res) => {
  try {
    const shops = await Shop.findAll();

    res.status(200).send(shops);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error!");
  }
};

const addShop = async (req, res) => {
  try {
    const { shop_name,
      shop_category,
      trade_license_number,
      age_of_shop,
      shop_image } = req.body;


    const shop = await Shop.create({
      shop_name,
      shop_category,
      trade_license_number,
      age_of_shop,
      shop_image
    });
    res.status(201).send(shop);

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error!");
  }
};

module.exports.getShops = getShops;
module.exports.addShop = addShop;
