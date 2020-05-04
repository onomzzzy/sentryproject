import React from "react";
import "../css/home.css";
import Header from "../functional_componet/header";
import HomeCarousel from "./homestaticcarousel";
import HomeContent from "./homecontent";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <HomeContent />
    </div>
  );
};

export default Home;
