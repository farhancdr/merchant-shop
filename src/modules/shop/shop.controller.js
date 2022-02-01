const Shop = require("./shop.model");
const Merchant = require("../merchant/merchant.model");

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
    const {
      merchant,
      shop_name,
      shop_category,
      trade_license_number,
      age_of_shop,
      shop_image } = req.body;

    if (!merchant) {
      return res.status(400).send("Merchant is required!");
    }

    if (merchant.id) {
      const merchantId = await Merchant.findOne({
        where: {
          id: merchant.id
        }
      });

      if(!merchantId) {
        return res.status(400).send("Merchant not found!");
      }
      
      const shop = await createShopByMerchant(merchantId, shop_name, shop_category, trade_license_number, age_of_shop, shop_image);
      return res.status(201).send(shop);
    }
  
    //get merchant details from merchant body
    const {
      merchant_name,
      user_name,
      phone,
      email,
      nid,
      subscription_package_id,
      used_referral_code
    } = merchant;

    const merchantDetails = await Merchant.create({
      merchant_name,
      user_name,
      phone,
      email,
      nid,
      subscription_package_id,
      used_referral_code
    });
    const merchantId = merchantDetails.id;
    console.log(merchantId)
    const shop = await createShopByMerchant(merchantId, shop_name, shop_category, trade_license_number, age_of_shop, shop_image);
    return res.status(201).send(shop);

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error!");
  }
};

const createShopByMerchant = async(merchant_id, shop_name, shop_category, trade_license_number, age_of_shop, shop_image) => {
  return Shop.create({
    merchant_id,
    shop_name,
    shop_category,
    trade_license_number,
    age_of_shop,
    shop_image
  });
}

module.exports.getShops = getShops;
module.exports.addShop = addShop;
