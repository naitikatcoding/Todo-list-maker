import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

const Navbar = () => {
  return (
    <nav className="max-w-300 w-full flex items-center justify-around px-5 py-4 border border-white/12 rounded-[18px] bg-slate-900/45 backdrop-blur-[8px] shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
      <div className="logo pr-205">
        <img src={logo} alt="Todo List maker logo" />
      </div>
      <div className="task flex whitespace-nowrap mr-8 items-center gap-2 hover:text-orange-400 hover:cursor-pointer">
        <span className="text-2xl font-sans font-bold">Add Task</span>
        <img src={plus} alt="task" className="plus-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
