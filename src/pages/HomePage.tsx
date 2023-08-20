import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import NewCollection from "../components/NewCollection/NewCollection";
import Features from "../components/Features/Features";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <NewCollection />
      <Features />
      <Brands />
    </>
  );
};

export default HomePage;
