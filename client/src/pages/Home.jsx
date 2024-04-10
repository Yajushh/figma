import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Banner />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
