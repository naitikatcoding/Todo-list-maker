import { useState } from 'react';
import Particles from "./Components/background.jsx";
import Navbar from "./Components/Navbar.jsx";
import InputBar from "./Components/Inputbar.jsx";
import notdone from "./assets/notdone.svg";
import done from "./assets/done.svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleInputBar = () => setIsOpen(!isOpen);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]); 
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-shell relative min-h-screen w-full overflow-x-hidden bg-[#030712] text-white flex flex-col items-center">
      <Particles className="background-canvas absolute inset-0 z-0" />
      
      <header className="relative z-50 w-full max-w-full px-4 sm:px-6 pt-10 flex justify-center">
        <Navbar onSearchClick={toggleInputBar} />
      </header>

      <main className="relative z-50 w-full max-w-6xl px-4 mt-6">
        <InputBar isOpen={isOpen} onSubmit={handleAddTask} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="p-4 bg-slate-900/40 border border-white/10 rounded-xl backdrop-blur-sm shadow-md w-full flex items-center gap-4 h-fit"
            >
              <button
                onClick={() => handleToggleComplete(task.id)}
                className="focus:outline-none shrink-0 cursor-pointer flex items-center justify-center w-9 h-9"
              >
                {task.completed ? (
                  <img src={done} alt="Completed" className="w-6 h-6 object-contain" />
                ) : (
                  <img src={notdone} alt="Not Completed" className="w-9 h-9 object-contain" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <span 
                  className={`text-lg font-medium tracking-wide block w-full break-words whitespace-normal text-left text-white ${
                    task.completed ? "line-through text-white/30" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
