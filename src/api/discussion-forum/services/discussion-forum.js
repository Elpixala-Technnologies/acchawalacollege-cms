'use strict';

/**
 * discussion-forum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discussion-forum.discussion-forum');
