// module.exports = {
//     async index(ctx, next) {
//       // called by GET /hello
//       ctx.body = "Hello World!"; // we could also send a JSON
//     },
//   };

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async getProductsByCategoryAndPrice(ctx) {
       const { categoryName } = ctx.params;
       try {
        const category = await strapi.entityService.findMany('api::category.category');
           console.log("category");
           console.log(category);
           
           
       } catch (err) {
         ctx.badRequest('Error fetching products', { moreDetails: err });
       }
    },

    async getProduct(ctx) {
        const { id } = ctx.params;
        try {
         const category = await strapi.entityService.findOne('api::category.category',id);
            console.log("hiii");
            console.log(category);
            if(!category){
                return ctx.throw(404,'category not found')
            }
            ctx.body = category;
            
        } catch (err) {
          ctx.badRequest('Error fetching products', { moreDetails: err });
        }
     },};

    //  async getProductsByCategoryId(ctx) {
    //     const { id } = ctx.params; // Assuming 'id' is the category ID from the URL
    //     try {
    //       // Fetch the category
    //       const category = await strapi.entityService.findOne('api::category.category', id);
    //       if (!category) {
    //         return ctx.notFound('Category not found');
    //       }
    
    //       // Fetch products in the category
    //       const products = await strapi.db.query('api::product.product').findMany({
    //         where: {
    //           category: category.id, // Filter products by category ID
    //         },
    //       });
    
    //       // Return the products
    //       ctx.body = products;
    //     } catch (err) {
    //       ctx.badRequest('Error fetching products', { moreDetails: err });
    //     }
    // }


