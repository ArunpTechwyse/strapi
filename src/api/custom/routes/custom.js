// module.exports = {
//     routes: [
//       {
//         method: "GET",
//         path: "/custom",
//         handler: "custom.index",
//       },
//     ],
//   };



module.exports = {
    routes: [
       {
         method: "GET",
         path: "/custom",
         handler: "custom.getProductsByCategoryAndPrice",
        //  config: {
        //    auth: false, // Adjust based on your authentication requirements
        //  },
       }, 
       {
        method: "GET",
        path: "/custom/:id",
        handler: "custom.getProduct", // Updated to match the controller method name
       },
       
    //   {
    //     method: "GET",
    //     path: "/custom/:id",
    //     handler: "custom.getProductsByCategoryId",
    //    //  config: {
    //    //    auth: false, // Adjust based on your authentication requirements
    //    //  },
       
    ],
   
   };
   