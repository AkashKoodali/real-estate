import React from "react";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import GetStarted from "../components/GetStarted/GetStarted";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";

import Contact from "../components/Contact/Contact";

const MainPage = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default MainPage;
