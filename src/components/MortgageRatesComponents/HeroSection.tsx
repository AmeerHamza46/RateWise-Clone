import React from "react";
import Section1 from "../Section1";
import Heading from "../Heading";

function HeroSection() {
  return (
    <>
      <Section1 title={"Achieve Financial Freedom with Rateswise"} />
      <div className="text-center">
        <Heading
          title={
            "Unlock your Borrowing Power, Get the Lowest Rates and Save More Money Today"
          }
          content={
            "Put an end to waiting for your bank or broker to call you back. Instead let Rateswise shop from over 60 approved lending partners to find you the best mortgage rate so you can focus on more important things."
          }
        />
      </div>
    </>
  );
}

export default HeroSection;
