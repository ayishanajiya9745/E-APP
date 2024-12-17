// import React from 'react'
// function Navbar() {
//   return (
//     <div className=' w-screen  flex flex-row '>
//        <div className='w-screen h-[80px] border shadow-lg bg-white'>
//         <div className='flex flex-row'>
//           <div className='logo flex mt-5 mb-5 '>
//                <img className='w-[50px] h-[50px]' src='https://icons.iconarchive.com/icons/icons8/windows-8/512/Ecommerce-Shopping-Cart-icon.png' alt='no' />
//                 <h1 className='mt-4'><b>MOBCART</b></h1>
//           </div>
//           <div className="flex items-center ml-20 gap-20">
//           <span className="hover:text-yellow-400 transition ">
//             Home
//           </span>
//           <span to="/cart" className="hover:text-yellow-400 transition ">
//             Cart
//           </span>
//           <span to="/orders" className="hover:text-yellow-400 transition">
//             Orders
//           </span>
//           <input className='ml-[250px] py-2 px-1 w-[350px] border border-black rounded' type='search' placeholder='search'/>
//           </div>
//           <div className="flex flex-row items-center gap-4 ">
//               <img className='ml-[100px]' src="..\assets\images\user (1).png"  alt='no'/>
//               <button className="w-[100px] h-[40px] bg-blue-600 rounded cursor:pointer transition mr-3">
//                 Logout
//               </button>
//         </div>
            
//        </div>
//     </div>
    
//   </div>
//   )
// }

// export default Navbar; 
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-[60px] w-full shadow-xl flex justify-between items-center bg-white px-4">
      <div className="flex items-center ">
        <img
          className="h-10 rounded-lg"
          src="../assets/images/shopping-cart.png"
          alt="Logo"
        />
        <span><b>MOBICART</b></span>
        
        <div className="hidden ml-[20px] md:flex space-x-7">
          <h1>Home</h1>
          <h1>Cart</h1>
          <h1>Orders</h1>
        </div>
      </div>

      
      <div className="flex w-full justify-center md:justify-end">
        <input
          type="search"
          placeholder="Search..."
          className="w-[300px] md:w-[500px] p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-8"
        />
      </div>

     
      <div className="hidden md:flex">
       <img className='ml-[100px]' src="..\assets\images\user (1).png"  alt='no'/>
        <p className="mr-4">Username</p>
        <button className="mr-2 bg-orange-400 border rounded w-[100px] h-[30px]">Logout</button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-400 p-4">
          <h1 className="text-center py-2">Home</h1>
          <h1 className="text-center py-2">Cart</h1>
          <h1 className="text-center py-2">Orders</h1>
          <div className="flex justify-center py-2">
          <button className="mr-2 bg-yellow-500 w-[100px] h-[30px]">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
