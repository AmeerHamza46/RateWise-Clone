"use client";
import Link from "next/link";
import { useState } from "react";
import SimpleButton from "./SimpleButton";

const Header = () => {
  let Links = [
    { name: "Mortgage Rates", link: "mortgage-rates" },
    { name: "Line of Credit Rates", link: "line-of-credit-rates" },
    { name: "Home Equity Loan Rates", link: "home-equity-loan-rates" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div
      className="container w-full lg:h-[76px] xl:flex items-center justify-center mx-auto 
    fixed  top-0 z-50 bg-white shadow-lg rounded-lg "
    >
      <div className="lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7 w-full">
        <Link href="/">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                     text-gray-800 gap-1"
          >
            rate
            <span
              className="text-lime-500
                    "
            >
              wise
            </span>
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-lime-500 absolute right-8 top-4 cursor-pointer lg:hidden"
        >
          {open ? "×" : "≡"}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-10 absolute 
                               lg:static bg-white 
                               lg:z-auto z-[-1] left-0 w-full 
                               lg:w-auto 
                               lg:pl-0 pl-9 transition-all 
                               shadow-2xl lg:shadow-none
                               duration-500 ease-in ${
                                 open ? "top-19 " : "top-[-490px]"
                               }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              onClick={() => setOpen(!open)}
              className="lg:ml-8 text-lg lg:my-0 my-7
                            relative group  text-gray-500 hover:text-lime-500 duration-500"
            >
              <Link href={link.link}>{link.name}</Link>
              <span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 
                                    bg-lime-500 rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                                    transition duration-500 ease-in-out"
              ></span>
            </li>
          ))}
          <div className="lg:hidden">
            <SimpleButton title={"Apply Now"} />
          </div>
        </ul>
        <div className="max-lg:hidden">
          <SimpleButton title={"Apply Now"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
