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
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div>
          <ScrollAnimation
            animateIn="bounce"
            initiallyVisible={true}
            animateOnce={true}
          >
            <HomeCarousel />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <HomeContent
              position="0"
              pixs={pix}
              writeUp="Delight… finally my GRC programme is under control"
            />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateIn="fadeIn" duration={5} animateOut="fadeOut">
            <HomeContent
              position="1"
              pixs={pix2}
              writeUp="Accessibility… wherever you are, you can track your progress"
            />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation
            duration={5}
            animateIn="flipInY"
            animateOut="flipOutY"
          >
            <HomeContent
              position="0"
              pixs={pix3}
              writeUp="Integrity… single source of truth for all shared documents"
            />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
            <HomeContent
              position="1"
              pixs={pix4}
              writeUp="Efficiency… doing more with our governance, risk and compliance"
            />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation
            delay={1000}
            animateIn="tada"
            initiallyVisible={true}
          >
            <HomeContent
              position="0"
              pixs={pix5}
              writeUp="Effectiveness… our organization is top notch"
            />
          </ScrollAnimation>
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
