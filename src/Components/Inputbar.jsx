import React, { useState, useEffect } from "react";

export default function InputBar({ onSubmit, isOpen, editingTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSubmit(text);
    setText("");
  };

  useEffect(() => {
    setText(editingTask ? editingTask.text : "");
  }, [editingTask]);

  return (
    <div
      inert={!isOpen ? "" : undefined}
      className={`relative z-50 grid transition-all duration-500 ease-in-out rounded-xl shadow-xl mt-4 w-full ${
        isOpen
          ? "grid-rows-[1fr] opacity-100 pointer-events-auto"
          : "grid-rows-[0fr] opacity-0 pointer-events-none"
      }`}
    >
      <div className="overflow-hidden w-full">
        {/* Adjusted form width constraints so it never breaks layout on screens smaller than 400px */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 max-w-md w-full my-5 mx-auto px-3 sm:px-4"
        >
          <label htmlFor="task-input" className="sr-only">
            {editingTask ? "Edit Your Task description" : "Add New Task item"}
          </label>
          <input
            id="task-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={editingTask ? "Edit Your Task..." : "Add Your Task..."}
            className="flex-1 text-center p-2.5 text-lg sm:text-2xl rounded-[32px] border border-white/20 bg-slate-900/90 text-white font-bold placeholder-gray-500 focus:outline-none focus:border-[#0070f3] min-w-0"
          />
          <button
            type="submit"
            className="py-2.5 px-4 sm:px-5 text-sm sm:text-base rounded-md border-none bg-[#0070f3] text-white font-semibold cursor-pointer hover:bg-[#0051b3] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 shrink-0"
          >
            {editingTask ? "Save" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
