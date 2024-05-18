'use strict';

/**
 * popular-company service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-company.popular-company');
