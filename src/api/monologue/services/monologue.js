'use strict';

/**
 * monologue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monologue.monologue');
