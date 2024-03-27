const product = require('../../product/controllers/product');


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
  },

  async getProductsByCategory(ctx) {
    try {
      // Extract the category from the request query
      const { category } = ctx.params;

      console.log(category);
      
      const categories = await strapi.db.query('api::category.category').findOne({
        where: {
          name: category
        }
      });

      if (categories) {
        // Use the Strapi Query Engine to find products by category name
        const products = await strapi.db.query('api::product.product').findMany({
          where: {
            categories: {
              name: category
            }
          }
        });

        return ctx.send(products);

      } else {
        // Category does not exist, send a 404 Not Found response
        ctx.throw(404, 'Category not found');

      }

    } catch (err) {
      return ctx.badRequest(err);
    }
  },
};



