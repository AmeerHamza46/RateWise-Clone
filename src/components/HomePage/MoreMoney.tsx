import React from "react";
import Section2Cards from "../Section2Cards";
import AnimatedButton from "../AnimatedButton";
import Heading from "../Heading";

function MoreMoney() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-10 mx-5 my-10">
        {/* <div className="mx-auto  my-[50px] flex flex-col justify-center gap-8 px-3 md:mb-[100px] lg:flex-row"> */}
        {/* Left */}
        <div
          className="w-full lg:max-w-xl 
          lg:text-start text-center"
        >
          <Heading
            title={"We believe you should save more money on your mortgage"}
            highlightText={"more money"}
            content={
              "RatesWise is a free, independent service, that helps you save time by doing all the comparison shopping for you."
            }
          />

          <AnimatedButton title={"I'm buying a home"} />
        </div>

        {/* Right */}
        <div className="flex flex-wrap w-full lg:justify-between lg:max-w-xl">
          <Section2Cards
            title={"Competitive Rates"}
            content={
              "Our strong relationships with top lenders enable us to secure the most competitive interest rates, helping you save over the life of your loan."
            }
          />
          <Section2Cards
            title={"Competitive Rates"}
            content={
              "Our strong relationships with top lenders enable us to secure the most competitive interest rates, helping you save over the life of your loan."
            }
          />
          <Section2Cards
            title={"Competitive Rates"}
            content={
              "Our strong relationships with top lenders enable us to secure the most competitive interest rates, helping you save over the life of your loan."
            }
          />
          <Section2Cards
            title={"Competitive Rates"}
            content={
              "Our strong relationships with top lenders enable us to secure the most competitive interest rates, helping you save over the life of your loan."
            }
          />
        </div>
      </div>
    </>
  );
}

export default MoreMoney;
