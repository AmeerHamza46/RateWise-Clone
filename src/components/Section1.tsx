import React from "react";

interface Section1Props {
  title: string;
}

function Section1({ title }: Section1Props) {
  return (
    <h1 className="text-center mt-36 mb-16 bg-lime-200 px-7 py-5 rounded-full mx-auto w-fit ">
      {title}
    </h1>
  );
}

export default Section1;
