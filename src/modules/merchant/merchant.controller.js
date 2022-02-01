const Merchant = require("./merchant.model");

const getMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.findAll();

    res.status(200).send(merchants);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error!");
  }
};

const addMerchant = async (req, res) => {
  try {
    const { merchant_name,
      user_name,
      phone,
      email,
      nid,
      subscription_package_id,
      used_referral_code
    } = req.body;

    const emailExists = await Merchant.findOne({
      where: {
        email: email
      }
    });

    const usernameExists = await Merchant.findOne({
      where: {
        user_name: user_name
      }
    });

    if (emailExists || usernameExists) {
      res.status(400).send("Merchant already exists!");
    } else {
      const merchant = await Merchant.create({
        merchant_name,
        user_name,
        phone,
        email,
        nid,
        subscription_package_id,
        used_referral_code
      });
      res.status(201).send(merchant);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error!");
  }
};

module.exports.getMerchants = getMerchants;
module.exports.addMerchant = addMerchant;
