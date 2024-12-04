import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function Questions({ title, answer }: { title: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-7 my-10 border-b-2">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h1 className="inline-block text-2xl">{title}</h1>

        <div
          className={`${
            open ? "-rotate-45" : ""
          } w-9 h-9 my-7 text-md  border border-lime-400 flex 
          items-center justify-center rounded-full text-lime-400`}
        >
          <FaPlus />
        </div>
      </div>

      {open && <p>{answer} </p>}
    </div>
  );
}

export default Questions;
