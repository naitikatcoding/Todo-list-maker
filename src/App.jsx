import { useState, useEffect } from "react";
import Particles from "./Components/background.jsx";
import Navbar from "./Components/Navbar.jsx";
import InputBar from "./Components/Inputbar.jsx";
import notdone from "./assets/notdone.svg";
import done from "./assets/done.svg";
import edit from "./assets/edit.svg";
import deleteIcon from "./assets/delete.svg";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  const toggleInputBar = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setEditingTask(null);
  };

  const handleSaveTask = async (text) => {
    if (editingTask) {
      try {
        await fetch(`${API_URL}/${editingTask.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text })
        });
        
        setTasks(prev => prev.map(task => 
          task.id === editingTask.id ? { ...task, text } : task
        ));
      } catch (err) { console.error(err); }
      
      setEditingTask(null);
      setIsOpen(false);
    } else {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text })
        });
        const newTask = await res.json();
        setTasks(prev => [...prev, newTask]);
      } catch (err) { console.error(err); }
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsOpen(true);
  };

  const toggleTaskProperty = async (id, key, currentValue) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: !currentValue })
      });
      
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, [key]: !task[key] } : task))
      );
    } catch (err) { console.error(err); }
  };

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTasks((prev) => prev.filter((task) => task.id !== id));
      if (editingTask?.id === id) {
        setEditingTask(null);
        setIsOpen(false);
      }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="app-shell relative min-h-screen w-full overflow-x-hidden bg-[#030712] text-white flex flex-col items-center">
      <Particles className="background-canvas absolute inset-0 z-0" />

      <header className="relative z-50 w-full max-w-full px-4 sm:px-6 pt-10 flex justify-center">
        <Navbar onSearchClick={toggleInputBar} />
      </header>

      <main className="relative z-50 w-full max-w-6xl px-4 mt-6">
        <h1 className="sr-only">Interactive Task Manager Dashboard</h1>
        
        <InputBar
          isOpen={isOpen}
          onSubmit={handleSaveTask}
          editingTask={editingTask}
        />

        <section aria-label="Tasks List" className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-start">
          {tasks.map((task) => (
            <article
              key={task.id}
              className={`p-4 bg-slate-900/40 border border-white/10 rounded-xl backdrop-blur-sm shadow-md w-full flex items-start justify-between gap-3 overflow-hidden transition-all duration-300 ${
                task.expanded ? "h-auto min-h-16" : "h-16"
              }`}
            >
              <div className="flex items-start gap-3 min-w-0 max-w-[75%] flex-1">
                <button
                  onClick={() => toggleTaskProperty(task.id, "completed", task.completed)}
                  aria-label={task.completed ? "Mark task as incomplete" : "Mark task as complete"}
                  className="focus:outline-none shrink-0 cursor-pointer flex items-center justify-center w-9 h-9 mt-1"
                >
                  <img
                    src={task.completed ? done : notdone}
                    alt=""
                    className={`${task.completed ? "w-6 h-6" : "w-9 h-9"} object-contain`}
                  />
                </button>

                <div
                  onClick={() => toggleTaskProperty(task.id, "expanded", task.expanded)}
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle full task text expansion"
                  onKeyDown={(e) => e.key === 'Enter' && toggleTaskProperty(task.id, "expanded", task.expanded)}
                  className="min-w-0 flex-1 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`text-lg font-medium tracking-wide block w-full text-left text-white break-all ${
                      task.completed ? "line-through text-white/30" : ""
                    } ${task.expanded ? "" : "line-clamp-1"}`}
                  >
                    {task.text}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 pl-1 border-l border-white/10 h-9">
                <button
                  onClick={() => handleEditTask(task)}
                  aria-label="Edit task item"
                  className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <img src={edit} alt="" className="w-5 h-5 object-contain" />
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  aria-label="Delete task item"
                  className="p-1.5 hover:bg-red-500/20 text-red-400 rounded transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <img src={deleteIcon} alt="" className="w-5 h-5 object-contain" />
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
