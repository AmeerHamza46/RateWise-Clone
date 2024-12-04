import React, { ChangeEvent, useState } from "react";
import Input from "./Input";

interface DataProp {
  propertyvalue: string;
  balance: string;
  value: string;
  name: string;
  email: string;
}
function MortgageRates({
  goNext,
  goBack,
  setData,
  data,
}: {
  goNext: () => void;
  goBack: () => void;
  setData: React.Dispatch<React.SetStateAction<DataProp>>;
  data: DataProp;
}) {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({ value: "" });

  const validate = () => {
    const newErrors = { value: "" };

    if (!data.value) {
      newErrors.value = "Value is required";
    }
    return newErrors;
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData((data) => {
      return { ...data, value };
    });
    if (errors.value) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (validationErrors.value) {
      setErrors(validationErrors);
      return;
    }

    goNext();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white">
      <h1 className="font-bold text-2xl mb-5">
        You're minutes away from today's best mortgage options.
      </h1>

      <Input
        label="What is the estimated value of your property?"
        name="propertyvalue"
        placeholder="$50,000,000"
        value={data.value}
        onChange={handleValueChange}
        error={errors.value}
      />
      <button
        onClick={() => {
          goBack();
        }}
        className="bg-lime-500 border-2  border-lime-500 px-8 py-2 rounded-full font-bold text-gray-50 
      transition duration-700
     hover:bg-white hover:text-lime-500  "
      >
        Back
      </button>
      <button
        type="submit"
        className="bg-lime-500 border-2  border-lime-500 px-8 py-2 rounded-full font-bold text-gray-50 
        transition duration-700
       hover:bg-white hover:text-lime-500"
      >
        Next
      </button>
    </form>
  );
}

export default MortgageRates;
