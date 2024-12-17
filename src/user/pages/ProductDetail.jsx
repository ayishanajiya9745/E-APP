// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProductDetail = () => {
//   const { id } = useParams();  // Get product ID from URL params
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details using the id from the URL
//     axios.get(`http://localhost:5000/products/${id}`)
//       .then((response) => {
//         console.log(response.data); // Debugging: Check API response
//         setProduct(response.data); // Set product data
//       })
//       .catch((error) => {
//         console.error('Error fetching product details:', error);
//       });
//   }, [id]); // Dependency on id, so it refetches when the id changes

//   if (!product) {
//     return <div>Loading...</div>;  // Loading state if the product is not fetched
//   }

//   return (
//     <div className="container mx-auto p-4">
//       {/* Product Details */}
//       <div className="flex flex-col items-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-96 h-auto object-contain rounded-md mb-4"
//         />
//         <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
//         <p className="text-lg text-gray-600 mb-4">${product.price}</p>
//         <p className="text-gray-700 mb-4">{product.description}</p>
//         <button
//           className="mt-2 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
