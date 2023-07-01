import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banar from "../components/Banar";
import MainCon from "../components/mainCon";
import Services from "../components/Services";
import Payment from "../components/Payment";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Banar />
      <MainCon />
      <Services />
    </>
  );
};

export default Home;
