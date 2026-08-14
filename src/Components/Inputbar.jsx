import React, { useState } from "react";

export default function InputBar({ onSubmit, isOpen }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSubmit(text);
    setText("");
  };

  return (
    <div
      className={`relative z-50 grid transition-all duration-500 ease-in-out  rounded-xl shadow-xl mt-4 ${
        isOpen ? "grid-rows-[1fr] opacity-100 pointer-events-auto" : "grid-rows-[0fr] opacity-0 pointer-events-none"
      }`}
    >
      <div className="overflow-hidden">
        <form 
          onSubmit={handleSubmit} 
          className="flex gap-2.5 max-w-100 my-5 mx-auto px-4"
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Your Task..."
            className=" flex-1 text-center p-2.5 text-2xl rounded-4xl border border-[#ccc] text-white font-bold focus:outline-none focus:border-[#0070f3]"
          />
          <button 
            type="submit" 
            className="py-2.5 px-5 text-base rounded-md border-none bg-[#0070f3] text-white cursor-pointer hover:bg-[#0051b3] transition-colors"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
