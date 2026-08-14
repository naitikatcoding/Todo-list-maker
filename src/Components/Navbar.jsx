import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

const Navbar = ({ onSearchClick }) => {
  return (
    <nav className="max-w-[1200px] w-full flex items-center justify-between px-5 py-4 border border-white/10 rounded-[18px] bg-slate-900/45 backdrop-blur-[8px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-white">
      <div className="logo">
        <img src={logo} alt="Todo List maker logo" />
      </div>
      <span className="text-4xl font-bold">Just Do It</span>
      <div 
        onClick={onSearchClick} 
        className="task flex whitespace-nowrap items-center gap-2 hover:text-orange-400 hover:cursor-pointer transition-colors"
      >
        <span className="text-2xl font-bold">Add Task</span>
        <img src={plus} alt="task" className="plus-icon w-6 h-6" />
      </div>
    </nav>
  );
};

export default Navbar;
