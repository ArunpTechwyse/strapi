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
    routes: [ {
         method: "GET",
         path: "/custom/count",
         handler: "custom.getCount",
       },   
    ],
   };
   