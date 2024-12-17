
// import React from "react";

  // const smartphones = [
  //   { id: 1, name: "iPhone 14 Pro", price: "$999",  image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg"},
  //   { id: 2, name: "Samsung Galaxy S23", price: "$799", image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-139011/Samsung-Galaxy-S23-Ultra_-featured-image-packshot-review.jpg" },
  //   { id: 3, name: "Google Pixel 8", price: "$699", image: "https://lh3.googleusercontent.com/Bb0pW46aE9gYCerY7R_zNVT3cWIzpnK1dQGnp7O-Ddg1gzABBy52EV9c45ypTTpPfBZbagL2IMwRwUxYe7flz-Crjp_6TKoZxDs" },
  //   { id: 4, name: "OnePlus 11", price: "$649", image: "data:image/jpeg;base64,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" },
  //   { id: 5, name: "iPhone SE 3", price: "$429", image: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM1NjRiNjcwODcyZWMwNWU3NGRkNzYzLWNvbnN1bWVyLWNlbGx1bGFyLWFwcGxlLWlwaG9uZS1zZS0zcmQuanBn.jpg" },
  //   { id: 6, name: "Realmi 14X", price: "$749", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H1m_zyQwF81LDVFrCXzgYZeu-D8G-ezzPQ&s" },
  //   { id: 7, name: "Vivo V30", price: "$699",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wSWLc-e25gjl-9fTAkHLCnZHP8zXRzs9Rg&s" },
  //   { id: 8, name: "Xiaomi 13 Pro", price: "$549", image: "data:image/jpeg;base64,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" },
  // ];
  
//   function ProductList() {
//     return (
//       <div className="p-4">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {smartphones.map((phone) => (
//             <div
//               key={phone.id}
//               className="border rounded-lg shadow-sm p-3 flex flex-col items-center"
//             >
//               {/* Product Image */}
//               <img
//                 src={phone.image}
//                 alt={phone.name}
//                 className="w-24 h-24 object-cover mb-3"
//               />
//               {/* Product Details */}
//               <h2 className="text-base font-semibold text-center">{phone.name}</h2>
//               <p className="text-lg font-bold text-orange-500">{phone.price}</p>
//               {/* Add to Cart Button */}
//               <button className="mt-2 bg-orange-500 text-white text-sm px-3 py-1 rounded hover:bg-orange-600">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
// //   export default ProductList; import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-5 gap-4">
//         {products.slice(0, 10).map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex flex-col justify-between"
//             style={{ height: '400px' }} // Fixed height for uniformity
//           >
//             {/* Reduced spacing around the image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-48 h-48 object-contain rounded-md mx-auto mb-2" // Margin bottom reduced
//             />

//             {/* Reduced margin between product name and price */}
//             <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
//             <p className="text-gray-600 mb-1">${product.price}</p>

//             {/* Reduced margin between product description and button */}
//             <button
//               className="mt-1 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-5 gap-4">
        {products.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex flex-col justify-between"
            style={{ height: '400px' }} // Fixed height for uniformity
          >
            {/* Reduced spacing around the image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 object-contain rounded-md mx-auto mb-2" // Margin bottom reduced
            />

            {/* Reduced margin between product name and price */}
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-1">${product.price}</p>

            {/* Reduced margin between product description and button */}
            <button
              className="mt-1 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;