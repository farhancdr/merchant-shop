const path = require("path");
const async = require("async");

async function init() {
    const config = require(path.join(process.cwd(), "src/config/config"));
    await config.initEnvironmentVariables();

    const nodecache = require(path.join(process.cwd(), "src/config/lib/nodecache"));

    const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));

    await sequelize.query(
        `CREATE DATABASE IF NOT EXISTS ${nodecache.getValue("DB_NAME")}`
    );

    const Merchant = require(path.join(process.cwd(), "src/modules/merchant/merchant.model"));
    const Shop = require(path.join(process.cwd(), "src/modules/shop/shop.model"));

    await sequelize.sync();

    function MerchantSeeder(callback) {
        try {
            Merchant.findOrCreate({
                where: { email: "saadman@gmail.com" },
                defaults: {
                    email: "saadman@gmail.com",
                    merchant_name: "Sadman Ahmed",
                    user_name: "saadman",
                    phone: "+8801856254156",
                    nid: "123456789",
                    subscription_package_id: "1",
                    used_referral_code: "Shadinota",
                },
            }).then(function () {
                callback();
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    function ShopSeeder(callback) {
        try {
            Shop.findOrCreate({
                where: { shop_name: "mudirDokan" },
                defaults: {
                    shop_name: "mudirDokan",
                    shop_category: 5,
                    trade_license_number: "123456789",
                    age_of_shop: 1,
                    shop_image: "mudirDokan.jpg",
                },
            }).then(function () {
                callback();
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    async.waterfall(
        [MerchantSeeder, ShopSeeder],
        function (err) {
            if (err) console.error(err);
            else console.info("DB seed completed!");
            process.exit();
        }
    );
}

init();
