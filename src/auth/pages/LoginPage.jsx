import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  
  return (
    <div className="App flex items-center justify-center h-screen w-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
      <div className="flex flex-col justify-between items-center py-[50px] w-[350px] h-[500px] bg-slate-300 border shadow-lg rounded-xl">
        <span className="font-serif font-bold text-4xl py-[3px] pb-10">LOGIN</span>
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-5">
          <div className="flex flex-col w-[250px] ">
            <input
              className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
              type="text"
              placeholder="Username"
            />
            
          </div>
          <div className="flex flex-col w-[250px]">
            <input
              className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
              type="password"
              placeholder="Password"
              
            />
          </div>
          <button
            type="submit"
            className=" w-[250px] h-[35px] font-medium mt-5 bg-white px-[80px] py-2 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-blue-500 hover:to-green-500"
          >
            Login
          </button>
        </form>
          <span className="text-xs text-blue-500">Forgot Password?</span>
        <p className="mt-2 text-sm mb-12">
          <span>Don't have an account?</span>
          <span className="text-sm text-blue-500 ">
            <NavLink to={"/Signup"}>Sign up</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;