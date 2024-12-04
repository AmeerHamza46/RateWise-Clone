import React from "react";

function AnimatedButton({ title }: { title: string }) {
  return (
    <div
      className="inline-block pr-24 relative overflow-hidden mt-7 pl-8 py-5 
    border-2 border-lime-400 rounded-full text-lime-400 transition-all duration-300 
     hover:text-white delay-100 group "
    >
      <p className="relative z-10 ">{title}</p>
      <div
        className="bg-lime-400 w-16 h-16 rounded-full text-white absolute top-0 right-0  
        hover:w-full group-hover:w-full transition-all duration-500"
      >
        <div className="w-full h-full relative">
          <div className="absolute top-1/2 -translate-y-1/2 right-6">→</div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedButton;
