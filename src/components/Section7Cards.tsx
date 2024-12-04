import React from "react";

function Section7Cards({ title, content }: { title: string; content: string }) {
  return (
    <div className="inline-block border bg-lime-200 py-16 px-6 w-72 min-w-64  mb-10 rounded-xl">
      <div className="flex justify-start gap-3 items-center mb-3">
        <div className="inline-block w-12 h-12 bg-red-500 rounded-full "></div>
        <h1 className="inline-block font-bold ">{title}</h1>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Section7Cards;
