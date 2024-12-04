import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
interface DataProp {
  propertyvalue: string;
  balance: string;
  value: string;
  name: string;
  email: string;
}
function PropertyRate({
  goNext,
  setData,
  data,
}: {
  goNext: () => void;
  setData: React.Dispatch<React.SetStateAction<DataProp>>;
  data: DataProp;
}) {
  const [errors, setErrors] = useState({ propertyvalue: "", balance: "" });

  const validate = () => {
    const newErrors = { propertyvalue: "", balance: "" };

    if (!data.propertyvalue) {
      newErrors.propertyvalue = "Value is required";
    }

    if (!data.balance) {
      newErrors.balance = "Value is required";
    }

    return newErrors;
  };

  const handlePropertyValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyvalue = e.target.value;

    setData((data) => {
      return { ...data, propertyvalue };
    });

    if (errors.propertyvalue) {
      setErrors((prev) => ({ ...prev, propertyvalue: "" }));
    }
  };

  const handleBalanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const balance = e.target.value;

    setData((data) => {
      return { ...data, balance };
    });
    if (errors.balance) {
      setErrors((prev) => ({ ...prev, balance: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.propertyvalue || validationErrors.balance) {
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
        value={data.propertyvalue}
        onChange={handlePropertyValueChange}
        error={errors.propertyvalue}
      />

      <Input
        label="What is the remaining balance on your mortgage?"
        name="balance"
        placeholder="$50,000,000"
        value={data.balance}
        onChange={handleBalanceChange}
        error={errors.balance}
      />
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

export default PropertyRate;
