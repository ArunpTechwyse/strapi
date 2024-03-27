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
        path: "/custom/count",
        handler: "custom.getCount",
      },
      {
        method: "GET",
        path: "/custom/category/:category",
        handler: "custom.getProductsByCategory",
      },
   ],
  };
  
   