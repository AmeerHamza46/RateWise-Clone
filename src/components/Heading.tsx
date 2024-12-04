import React from "react";

interface Section2Props {
  title: string;
  highlightText?: string; // highlightText optional
  content: string;
}

function Heading({ title, highlightText, content }: Section2Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-black text-6xl font-bold max-w-6xl">
          {
            highlightText
              ? title.split(highlightText)[0] // Part before highlightText
              : title // If no highlightText, show the whole subtitle
          }

          {highlightText && (
            <span className="text-[#A6CA39]">{highlightText}</span>
          )}

          {highlightText
            ? title.split(highlightText)[1] // Part after highlightText
            : ""}
        </h1>

        <p className="max-w-4xl mt-6 text-xl">{content}</p>
      </div>
    </>
  );
}

export default Heading;
