import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import EastIcon from "@mui/icons-material/East";

export default function Navbar() {
  return (
    <div className="flex w-full h-24 bg-gradient-to-b from-zinc-400 via-zinc-500 to-stone-700 items-center px-5">
      <Link to="/" className="flex items-center gap-2 ml-5">
        <img src={logo} alt="DeCarbonn logo" className="w-20 h-20" />
        <span className="text-4xl font-extrabold">DeCarbonn</span>
      </Link>
      <div className="flex justify-center items-center ml-28">
        <ul className="flex gap-16">
          <li className="transition duration-300 transform hover:scale-105">
            <Link to="/" className="font-semibold text-xl">
              Home
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105">
            <Link to="/carbon-calculator" className="font-semibold text-xl">
              Carbon Calculator
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105">
            <Link to="/carbon" className="font-semibold text-xl">
              Projects
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105">
            <Link to="/about" className="font-semibold text-xl ">
              About
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105">
            <Link to="/team" className="font-semibold text-xl">
              Team
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105">
            <Link to="/resources" className="font-semibold text-xl">
              Resources
            </Link>
          </li>
        </ul>
        <button className="bg-white flex gap-2 justify-center items-center font-semibold text-xl rounded-3xl py-2 px-4 ml-14 w-40 hover:bg-slate-200 shadow-md hover:shadow-lg transition duration-300">
          <Link to="/signup">Connect</Link>
          <EastIcon />
        </button>
      </div>
    </div>
  );
}
