import React from "react";
import Section6Cards from "../Section6Cards";
import Heading from "../Heading";

function BestMortgageRates() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-10 mx-5 my-10">
        {/* Left */}
        <div
          className="w-full lg:max-w-xl 
          lg:text-start text-center"
        >
          <Heading
            title={"Today's best mortgage rates"}
            highlightText={"Today's best mortgage rates"}
            content={
              "Discover the most competitive mortgage rates available today, providing you with the opportunity to secure your dream home with favorable terms and payments."
            }
          />
        </div>

        {/* Right */}
        <div className="flex max-w-xl overflow-hidden overflow-x-scroll no-scrollbar gap-12">
          <Section6Cards
            logo={"TD"}
            warranty={"5 Year Fixed"}
            percentage={"5.58%"}
          />

          <Section6Cards
            logo={"TD"}
            warranty={"5 Year Fixed "}
            percentage={"6.19%"}
          />

          <Section6Cards
            logo={"TD"}
            warranty={"5 Year Fixed"}
            percentage={"6.19%"}
          />
        </div>
      </div>
    </>
  );
}

export default BestMortgageRates;
