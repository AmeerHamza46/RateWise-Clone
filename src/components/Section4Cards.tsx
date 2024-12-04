import React from "react";

function Section4Cards({ title, content }: { title: string; content: string }) {
  return (
    <div className="inline-block p-5 mb-5 w-72 min-w-64 rounded-xl border-2 border-lime-400 hover:bg-lime-400 hover:text-white duration-500">
      <h1 className="font-bold text-lg my-4">{title}</h1>
      <p className="mb-10">{content}</p>
    </div>
  );
}

export default Section4Cards;
