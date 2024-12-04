import React from "react";
import Image from "next/image";

interface Section2CardsPorps {
  title: string;
  content: string;
}

function Section2Cards({ title, content }: Section2CardsPorps) {
  return (
    <div className="md:w-[350px] lg:w-72 w-full pr-3">
      <p className="font-bold text-lg my-4">{title}</p>
      <p className=" text-sm ">{content}</p>
    </div>
  );
}

export default Section2Cards;
