import React from 'react'
function Navbar() {
  return (
    <div className=' w-screen  flex flex-row '>
       <div className='w-screen h-[80px] border shadow-lg bg-white'>
        <div className='flex flex-row'>
          <div className='logo flex mt-5 mb-5 '>
               <img className='w-[50px] h-[50px]' src='https://icons.iconarchive.com/icons/icons8/windows-8/512/Ecommerce-Shopping-Cart-icon.png' alt='no' />
                <h1 className='mt-4'><b>MOBCART</b></h1>
          </div>
          <div className="flex items-center ml-20 gap-20">
          <span className="hover:text-yellow-400 transition ">
            Home
          </span>
          <span to="/cart" className="hover:text-yellow-400 transition ">
            Cart
          </span>
          <span to="/orders" className="hover:text-yellow-400 transition">
            Orders
          </span>
          <input className='ml-[250px] py-2 px-1 w-[350px] border border-black rounded' type='search' placeholder='search'/>
          </div>
          <div className="flex flex-row items-center gap-4 ">
              <img className='ml-[100px]' src="..\assets\images\user (1).png"  alt='no'/>
              <button className="w-[100px] h-[40px] bg-blue-600 rounded cursor:pointer transition mr-3">
                Logout
              </button>
        </div>
            
       </div>
    </div>
    
  </div>
  )
}

export default Navbar; 
