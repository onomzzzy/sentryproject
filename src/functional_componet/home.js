import React from "react";
import "../css/home.css";
import pix from "../icons/proccessed3.jpg";
import pix2 from "../icons/proccessed4.jpg";
import pix3 from "../icons/proccessed5.jpg";
import pix4 from "../icons/processed6.jpg";
import pix5 from "../icons/processed7.jpg";
import HomeCarousel from "./homestaticcarousel";
import HomeContent from "./homecontent";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div>
          <HomeCarousel />
        </div>
        <div>
          <HomeContent
            position="0"
            pixs={pix}
            writeUp="Delight… finally my GRC programme is under control"
          />
        </div>
        <div>
          <HomeContent
            position="1"
            pixs={pix2}
            writeUp="Accessibility… wherever you are, you can track your progress"
          />
        </div>
        <div>
          <HomeContent
            position="0"
            pixs={pix3}
            writeUp="Integrity… single source of truth for all shared documents"
          />
        </div>
        <div>
          <HomeContent
            position="1"
            pixs={pix4}
            writeUp="Efficiency… doing more with our governance, risk and compliance"
          />
        </div>
        <div>
          <HomeContent
            position="0"
            pixs={pix5}
            writeUp="Effectiveness… our organization is top notch"
          />
        </div>
        >
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
