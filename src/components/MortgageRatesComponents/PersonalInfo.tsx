import React, { ChangeEvent, useState } from "react";
import Input from "./Input";

interface ValidationErrors {
  name: string;
  email: string;
  password: string;
}
interface DataProp {
  propertyvalue: string;
  balance: string;
  value: string;
  name: string;
  email: string;
}
function PersonalInfo({
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
  // for form validation
  const [errors, setErrors] = useState<ValidationErrors>({
    name: "",
    email: "",
    password: "",
  });
  //Form validations
  const validate = () => {
    const newErrors = { name: "", email: "", password: "" };
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.name) {
      newErrors.name = "Name is Required";
    }
    if (!data.email) {
      newErrors.email = "Email is Required";
    } else if (!emailPattern.test(data.email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setData((data) => {
      return { ...data, name };
    });

    if (errors.name) {
      const err = validate();
      setErrors((prevErrors) => ({ ...prevErrors, name: err.name }));
    }

    if (data.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setData((data) => {
      return { ...data, email };
    });

    if (errors.email) {
      const err = validate();
      setErrors((prevErrors) => ({ ...prevErrors, email: err.email }));
    }

    if (data.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handleInfo = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    // handle form validation error
    const validationErrors = validate();
    if (
      validationErrors.email ||
      validationErrors.name ||
      validationErrors.password
    ) {
      setErrors(validationErrors);
      return;
    }

    goNext();
  };
  return (
    <>
      <form onSubmit={handleInfo} className="w-full max-w-md p-8 bg-white ">
        <h1 className="font-bold text-2xl">
          Great News! We've found 9+options for you.
        </h1>
        <p className="text-gray-400 text-sm mt-5">
          Complete the last step below to reveal which brokerage is offering
          these rates and programs. Enter your contact information and on the
          next page you'll be able to:
        </p>
        <ul className="text-gray-400 text-sm list-disc ml-10 mb-5">
          <li>See the rest of your quotes</li>
          <li>Find out which brokerage is offering these rates</li>
          <li>
            Contact a broker to secure your rate and find if you can save even
            more
          </li>
        </ul>
        <Input
          label="Name"
          name="name"
          placeholder="Enter you name"
          value={data.name}
          onChange={handleName}
          error={errors.name}
        />

        <Input
          label="Email"
          name="email"
          placeholder="Enter you Email"
          value={data.email}
          onChange={handleEmail}
          error={errors.email}
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
          Finish
        </button>
      </form>
    </>
  );
}

export default PersonalInfo;
