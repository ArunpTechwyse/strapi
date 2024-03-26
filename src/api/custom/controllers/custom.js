

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = {


  async getCount(ctx) {
    try {
      // Use the Strapi ORM to count the products
      const count = await strapi.entityService.count('api::product.product');

      // Return the count as JSON response
      return ctx.send({ count });
    } catch (err) {
      // Handle errors
      return ctx.badRequest("Failed to count products");
    }
  },};

