import React from "react";
import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

const Navbar = ({ onSearchClick }) => {
  return (
    <nav className="max-w-300 w-full flex items-center justify-between px-5 py-4 border border-white/10 rounded-[18px] bg-slate-900/45 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-white">
      <div className="logo flex items-center">
        <img src={logo} alt="Todo List Maker Corporate Logo" className="h-8 w-auto object-contain" />
      </div>
      <h2 className="text-4xl font-bold tracking-tight">Just Do It</h2>
      <button 
        onClick={onSearchClick} 
        className="task flex whitespace-nowrap items-center gap-2 hover:text-orange-400 border-none bg-transparent text-white text-2xl font-bold cursor-pointer transition-colors focus:outline-none focus:text-orange-400"
      >
        <span>Add Task</span>
        <img src={plus} alt="" className="plus-icon w-6 h-6 object-contain" />
      </button>
    </nav>
  );
};

export default Navbar;
