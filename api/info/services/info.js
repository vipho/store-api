'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    findOne(params, populate) {
        return strapi.query('info').findOne({ name: params.name }, populate);
    },
};
