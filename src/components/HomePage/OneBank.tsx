import React from "react";
import Heading from "../Heading";
import AnimatedButton from "../AnimatedButton";

function OneBank() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-20">
        <div className="max-w-5xl text-center">
          <Heading
            title={"Why are you still working with one Bank?"}
            highlightText={"one Bank?"}
            content={
              "We work with over 50 trusted lending partners and top-rated brokerages to find you the best fit at the lowest rates."
            }
          />
        </div>
        <AnimatedButton title={"I'm renewing my mortgage"} />
      </div>
    </>
  );
}

export default OneBank;
