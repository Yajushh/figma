import React from "react";
import { Link } from "react-router-dom";
export default function CarbonCalc() {
  return (
    <div>
      CarbonCalc
      <div className="flex gap-2 mt-5">
        <p>Go to home</p>
        <Link to="/">
          <span className="text-blue-500">Home Page</span>
        </Link>
      </div>
    </div>
  );
}
