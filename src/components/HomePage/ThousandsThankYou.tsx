import React from "react";
import Section7Cards from "../Section7Cards";
import Heading from "../Heading";

function ThousandsThankYou() {
  return (
    <>
      <div className="text-center my-20">
        <Heading
          title={"You Saved us Thousands Thank You!"}
          highlightText={"Saved"}
          content={
            "Discover how Rateswise transformed clients' financial journeys—lowering debt and securing optimal mortgage rates."
          }
        />
      </div>

      <div className="flex lg:flex-wrap lg:justify-center gap-5 overflow-hidden overflow-x-scroll no-scrollbar mx-5 ">
        <Section7Cards
          title={"Emily Johsan"}
          content={
            "Discover the most competitive mortgage rates available today, providing you with the opportunity to secure your dream home with favorable terms and payments."
          }
        />
        <Section7Cards
          title={"Emily Johsan"}
          content={
            "Discover the most competitive mortgage rates available today, providing you with the opportunity to secure your dream home with favorable terms and payments."
          }
        />
        <Section7Cards
          title={"Emily Johsan"}
          content={
            "Discover the most competitive mortgage rates available today, providing you with the opportunity to secure your dream home with favorable terms and payments."
          }
        />
        <Section7Cards
          title={"Emily Johsan"}
          content={
            "Discover the most competitive mortgage rates available today, providing you with the opportunity to secure your dream home with favorable terms and payments."
          }
        />
      </div>
    </>
  );
}

export default ThousandsThankYou;
