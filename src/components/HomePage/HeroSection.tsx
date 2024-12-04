import React from "react";
import Section1 from "../Section1";
import Heading from "../Heading";

function HeroSection() {
  return (
    <>
      <Section1 title={"Achieve Financial Freedom with Rateswise"} />
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-4xl text-center">
          <Heading
            title={"Want a lower rate on your mortgage?"}
            highlightText={"lower rate"}
            content={
              "Shop for today's best mortgage rates for free, and get wise about rates."
            }
          />
        </div>

        <p className="text-xl font-bold my-7 text-center">
          Show me the best mortgage rates in Ontario
        </p>

        {/* Adress Input || button */}
        <div className="max-w-4xl w-auto flex flex-nowrap">
          <input
            className="px-16 py-6 rounded-full max-w-72  w-auto h-20  border border-black  outline-lime-400"
            type="text"
            placeholder="Enter Adrerss"
          />

          <button className="px-6 py-6 rounded-full bg-lime-500 w-20  h-20">
            →
          </button>
        </div>

        <p className="text-center text-xl max-w-3xl my-7">
          Trust Rateswise to find you lower payments, competitive rates, and
          guaranteed ways to improve monthly savings.
        </p>
      </div>
    </>
  );
}

export default HeroSection;
