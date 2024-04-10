import React from "react";
import Header from "../components/Header";
import carbon from "../images/carbonNew.png";
import { Link } from "react-router-dom";

export default function Carbon() {
  return (
    <div className="flex flex-col bg-[#fdfaec]">
      <div className="flex gap-2">
        <Link to="/">
          <span className="text-blue-500">Back to Home Page</span>
        </Link>
      </div>
      <div
        className="text-4xl font-extrabold flex justify-center items-center font-serif p-5 text-[#1a5130]"
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)" }} // Inline style for text shadow
      >
        See Carbon In Action
      </div>
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="p-7 bg-[#fdfaec] flex justify-center mx-auto">
        <img src={carbon} alt="Carbon" className="w-full border rounded-lg" />
      </div>
    </div>
  );
}
