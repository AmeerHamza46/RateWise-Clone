import React from "react";
import Heading from "../Heading";
import Section4Cards from "../Section4Cards";

function BestRates() {
  return (
    <>
      <div className="flex items-center justify-center my-20">
        <div className="max-w-5xl text-center">
          <Heading
            title={
              "We shop today's banks for the best rate so you don't have to."
            }
            highlightText={"best rate"}
            content={
              "Take advantage of our bank and lending relationships to save more money, get a lower mortgage rate, or do both!"
            }
          />
        </div>
      </div>

      <div className="flex lg:flex-wrap lg:justify-center gap-5 mx-5 overflow-hidden overflow-x-scroll no-scrollbar my-10">
        <Section4Cards
          title={"Shop for best mortgage rates"}
          content={
            "Shop for a best mortgage rates, review your options, and do it all from home."
          }
        />
        <Section4Cards
          title={"Shop for best mortgage rates"}
          content={
            "Shop for a best mortgage rates, review your options, and do it all from home."
          }
        />
        <Section4Cards
          title={"Shop for best mortgage rates"}
          content={
            "Shop for a best mortgage rates, review your options, and do it all from home."
          }
        />
        <Section4Cards
          title={"Shop for best mortgage rates"}
          content={
            "Shop for a best mortgage rates, review your options, and do it all from home."
          }
        />
      </div>
    </>
  );
}

export default BestRates;
