import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import NewCollection from "../components/NewCollection";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <NewCollection />
      <Features />
      <AboutUs />
      <Brands />
    </>
  );
};

export default HomePage;
