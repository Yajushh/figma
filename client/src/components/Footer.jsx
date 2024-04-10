import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#fdfaec] z-30 flex-wrap flex fixed bottom-0 w-full">
      <div className="flex justify-center py-4 items-center mx-auto gap-3">
        <div className="font-extrabold text-4xl font-serif">Trusted By :</div>
        <div className="flex">
          <span className="font-extrabold text-4xl font-serif">AIR</span>
          <span className="text-4xl font-serif font-extralight">MINERS</span>
        </div>
      </div>
    </div>
  );
}
