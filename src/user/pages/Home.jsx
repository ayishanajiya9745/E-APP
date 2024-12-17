// import React from "react";

// const smartphones = [
//   {
//     id: 1,
//     name: "iPhone 14 Pro",
//     price: "₹82,999",
//     image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg" , 
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S23",
//     price: "₹74,999",
//     image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-139011/Samsung-Galaxy-S23-Ultra_-featured-image-packshot-review.jpg",
//   },
//   {
//     id: 3,
//     name: "Google Pixel 8",
//     price: "₹67,999",
//     image: "https://lh3.googleusercontent.com/Bb0pW46aE9gYCerY7R_zNVT3cWIzpnK1dQGnp7O-Ddg1gzABBy52EV9c45ypTTpPfBZbagL2IMwRwUxYe7flz-Crjp_6TKoZxDs",
//   },
// ];

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Smartphones</h1>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-4 max-w-6xl mx-auto">
//         {smartphones.map((phone) => (
//           <div
//             key={phone.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
//           >
//             <img
//               src={phone.image}
//               alt={phone.name}
//               className="h-64 w-full object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">{phone.name}</h2>
//               <p className="text-lg text-gray-600 mt-2">{phone.price}</p>
//               <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
