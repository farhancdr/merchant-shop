const path = require("path");
const express = require("express");
const config = require('../config');
const logger = require('./logger');
module.exports = async function () {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.set('port', process.env.PORT);

    const globalConfig = config.getGlobalConfig();

    // serve a homepage with express
    app.get('/', (req, res) => {
        // send single json object
        logger.info('info!')
        logger.warn('warn!')
        logger.error('error!')
        logger.success('success!')

        res.send({
            message: 'Hello World!',
            body: "Welcome to the world of NodeJS and Express. Go to '/api/merchants' to see the list of merchants."
        });
    })

    globalConfig.routes.forEach(function (routePath) {
        require(path.resolve(routePath))(app);
    });

    return app;
};
