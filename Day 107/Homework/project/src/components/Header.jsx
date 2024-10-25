import React from "react";
import logo from '../assets/Logo.png'
import ListItems from "./ListItems";

const Header = () => {
    return (
        <header className="bg-gray-900 p-10 flex items-center justify-between">
            <div className="flex items-center gap-5">
                <img src={logo} alt="" className="w-[150px] h-[150px] rounded-full cursor-pointer"/>
                <a href="#"><h1 className="text-white font-extrabold text-[3rem] font-mono cursor-pointer">ChagoLand</h1></a>
            </div>
            <form className="bg-gray-50 rounded-[10px] w-[25%] flex justify-between">
               <input type="search" placeholder="Search..." className="bg-transparent p-3 w-full focus:outline-none focus:rounded-[10px]"/> 
               <button type="submit" className="p-3 bg-green-600 text-white font-bold rounded-[10px]">Search</button>
            </form>
            <ListItems />
        </header>
    )
}

export default Header;