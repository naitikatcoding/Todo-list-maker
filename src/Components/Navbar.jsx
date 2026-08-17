import React from "react";
import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

const Navbar = ({ onSearchClick }) => {
  return (
    <nav className="relative max-w-6xl w-full flex flex-col md:flex-row md:items-center justify-between p-4 md:px-5 md:py-4 border border-white/10 rounded-[18px] bg-slate-900/45 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-white gap-4 md:gap-0">
      
      <div className="flex items-center justify-between w-full md:w-auto z-10">
        <div className="logo flex items-center justify-start">
          <img src={logo} alt="Todo List Maker Corporate Logo" className="h-8 w-auto object-contain" />
        </div>
        
        <div className="md:hidden flex items-center justify-end">
          <h2 className="text-2xl font-bold tracking-tight font-['Sekuya'] whitespace-nowrap text-right">Just Do It</h2>
        </div>
      </div>
      
      <div className="hidden md:absolute md:inset-0 md:flex md:items-center md:justify-center pointer-events-none">
        <h2 className="text-4xl font-bold tracking-tight pointer-events-auto font-['Sekuya'] whitespace-nowrap">Just Do It</h2>
      </div>

      <button 
        onClick={onSearchClick} 
        className="task relative z-10 flex whitespace-nowrap items-center justify-center gap-2 border border-white/10 md:border-none bg-slate-900/40 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none text-xl md:text-2xl font-bold cursor-pointer transition-colors focus:outline-none focus:text-orange-400 w-full md:w-auto self-center"
      >
        <span>Add Task</span>
        <img src={plus} alt="" className="plus-icon w-6 h-6 object-contain" />
      </button>
    </nav>
  );
};

export default Navbar;
