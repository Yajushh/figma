// Banner.jsx
import React from "react";
import video from "../assets/video.mp4";

export const Banner = () => {
  // Calculate the remaining height for the banner (full viewport height minus Navbar height)
  // h-[calc(100vh-6rem)] corresponds to 100vh - 24 (since by default 1rem = 16px and your Navbar is h-24, which is 6rem)
  return (
    <section className="relative flex flex-col  justify-center overflow-hidden text-white h-[calc(100vh-6rem)]">
      <video
        className="absolute z-10 w-full h-full object-cover"
        src={video}
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="z-20 relative mt-60 ml-8">
        <h1 className="text-6xl font-semibold mb-4">
          INVEST IN THE <br />
          FUTURE OF EARTH
        </h1>
        <p className="text-3xl">
          On a mission to finance and remove 1,000,000
          <br /> tonnes of CO2 from the atmosphere by 2028.
        </p>
      </div>
    </section>
  );
};
