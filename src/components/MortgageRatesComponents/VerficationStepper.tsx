"use client";
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PropertyRate from "./PropertyRates";
import MortgageRates from "./MortgageRates";

interface DataProp {
  propertyvalue: string;
  balance: string;
  value: string;
  name: string;
  email: string;
}
const steps = ["Property Info", "Mortgage Rates", "Personal Info"];

function VerificationStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<DataProp>({
    balance: "",
    propertyvalue: "",
    value: "",
    name: "",
    email: "",
  });
  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col p-20 my-20 max-w-2xl ml-20 bg-lime-400 rounded-xl">
          {steps.map((item, i) => (
            <div
              onClick={() => setCurrentStep(i)}
              className={`mb-5 font-bold text-xl text-white cursor-pointer ${
                i === currentStep ? "text-blue-600" : ""
              }`}
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-lg shadow-lg p-10 bg-white">
          {steps[currentStep] === "Property Info" && (
            <PropertyRate goNext={goNext} setData={setData} data={data} />
          )}
          {steps[currentStep] === "Mortgage Rates" && (
            <MortgageRates
              goNext={goNext}
              goBack={goBack}
              setData={setData}
              data={data}
            />
          )}
          {steps[currentStep] === "Personal Info" && (
            <PersonalInfo
              goNext={goNext}
              goBack={goBack}
              setData={setData}
              data={data}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default VerificationStepper;
