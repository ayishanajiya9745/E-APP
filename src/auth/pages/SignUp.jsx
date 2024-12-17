import React, { useState } from 'react';

function SignUP() {

    return (
        <div className="App flex items-center justify-center h-screen w-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
            <div className="flex flex-col justify-between items-center py-[50px] w-[350px] h-[600px] bg-slate-300 border shadow-lg rounded-xl">
                <span className="font-serif font-bold text-4xl py-[3px]">SIGN UP</span>
                <form onSubmit={handleSignUp} className="flex flex-col items-center  gap-5">
                    <div className="flex flex-col w-[250px]">
                        <input
                            className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
                            type="text"
                            placeholder="Username"
                        />
                        {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                    </div>

                    <div className="flex flex-col w-[250px]">
                        <input
                            className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
                            type="email"
                            placeholder="Email"
                            value={email}
                            
                
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col w-[250px]">
                        <input
                            className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
                            type="password"
                            placeholder="Password"
                            value={password}

                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>

                    <div className="flex flex-col w-[250px]">
                        <input
                            className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                    </div>

                    {errors.general && <span className="text-red-500">{errors.general}</span>}
                    <button
                        type="submit"
                        className="w-[250px] h-[35px] cursor:pointer bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl mt-4"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                    Already have an account? <NavLink to="/login" className="text-blue-500">LOGIN</NavLink>
                </p>
            </div>
        </div>
    );
}

export default SignUP;