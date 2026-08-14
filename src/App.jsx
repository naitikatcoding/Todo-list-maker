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
      completed: false // Tracks if the task is checked or not
    };
    setTasks([...tasks, newTask]); 
  };

  // Toggles the completed state of a clicked item
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-shell relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-white">
      <Particles className="background-canvas absolute inset-0 z-0" />
      
      <header className="relative z-50 w-full px-6 pt-10 flex justify-center">
        <Navbar onSearchClick={toggleInputBar} />
      </header>

      <main className="relative z-50 max-w-xl mx-auto px-4 w-full">
        <InputBar isOpen={isOpen} onSubmit={handleAddTask} />

        <div className="mt-8 space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="p-4 bg-slate-900/60 border border-white/10 rounded-xl backdrop-blur-sm shadow-md flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Custom Checkbox Action Container */}
                <button
                  onClick={() => handleToggleComplete(task.id)}
                  className="focus:outline-none shrink-0 cursor-pointer"
                >
                  {task.completed ? (
                    
                    <img src={done} alt="Completed" className="w-6 h-6" />
                  ) : (
                   
                    <img src={notdone} alt="Not Completed" className="w-6 h-6" />
                  )}
                </button>

                {/* Task text fades and line-through applies when completed */}
                <span 
                  className={`text-lg transition-all duration-300 ${
                    task.completed ? "line-through text-white/40" : "text-white"
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
