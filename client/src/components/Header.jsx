import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  // Update the active tab when the location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const tabClass = (path) =>
    activeTab === path
      ? "bg-green-900 text-white"
      : "cursor-pointer text-gray-700 hover:bg-gray-200 hover:text-green-700";

  return (
    <div className="w-full pt-5">
      <div className="flex justify-center">
        <div className="bg-slate-50 rounded-3xl w-1/2 mx-auto p-2 grid grid-cols-3 gap-4">
          {/* Tabs */}
          <div
            className={`rounded-full py-2 font-semibold shadow-md flex justify-center items-center ${tabClass(
              "/carbon"
            )}`}
          >
            {/* Make Link the outer element to cover the entire tab */}
            <Link
              to="/carbon"
              className="w-full h-full flex justify-center items-center"
            >
              Carbon
            </Link>
          </div>
          <div
            className={`rounded-full py-2 font-semibold shadow-md flex justify-center items-center ${tabClass(
              "/wildlife"
            )}`}
          >
            <Link
              to="/wildlife"
              className="w-full h-full flex justify-center items-center"
            >
              Wildlife
            </Link>
          </div>
          <div
            className={`rounded-full py-2 font-semibold shadow-md flex justify-center items-center ${tabClass(
              "/communities"
            )}`}
          >
            <Link
              to="/communities"
              className="w-full h-full flex justify-center items-center"
            >
              Communities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
