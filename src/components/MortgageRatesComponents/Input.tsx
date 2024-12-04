import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  placeholder: string;
}

const Input = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block mb-1 text-sm font-medium text-gray-600"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={"text"}
          id={name}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={
            error
              ? ` w-full px-4 py-2 border border-red-600 rounded-lg focus:outline-none `
              : ` w-full px-4 py-2 border border-black rounded-lg focus:outline-none `
          }
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
