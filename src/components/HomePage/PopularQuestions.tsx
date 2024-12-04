import React from "react";
import Questions from "../Questions";
import Heading from "../Heading";

function PopularQuestions() {
  return (
    <>
      <div className="text-center mb-7">
        <Heading
          title={"We Love to help"}
          highlightText={"Love"}
          content={
            "Have a questions? Here are some of the popular questions we are asked."
          }
        />
      </div>
      <div className="my-7 mx-[145px] max-[1536px]:mx-0">
        <Questions
          title={"What does RateWise.com do?"}
          answer={
            "Our clients enjoy hassle free rate comparisons from over 50 lenders, and some of the very best mortgage brokerages across Canada.  Using our partnerships, technology, and our passionate team, we search, locate and present offers from companies that are the best match based on your location and needs."
          }
        />
        <Questions
          title={"What should I let RateWise do my shopping?"}
          answer={
            "Our clients enjoy hassle free rate comparisons from over 50 lenders, and some of the very best mortgage brokerages across Canada.  Using our partnerships, technology, and our passionate team, we search, locate and present offers from companies that are the best match based on your location and needs."
          }
        />
        <Questions
          title={"Does it cost money to use the service?"}
          answer={
            "Our clients enjoy hassle free rate comparisons from over 50 lenders, and some of the very best mortgage brokerages across Canada.  Using our partnerships, technology, and our passionate team, we search, locate and present offers from companies that are the best match based on your location and needs."
          }
        />
      </div>
    </>
  );
}

export default PopularQuestions;
