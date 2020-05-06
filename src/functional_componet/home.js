import React, { useContext } from "react";
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
import { WebAppContext } from "../App";

const Home = () => {
  const webAppContext = useContext(WebAppContext);
  return (
    <div>
      <div className="home">
        <div>
          <ScrollAnimation
            animateOnce={true}
            initiallyVisible={true}
            animateIn="jello"
          >
            <HomeCarousel />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation initiallyVisible={true} animateIn="bounce">
            <HomeContent
              position="0"
              pixs={pix}
              writeUp="Delight… finally my GRC programme is under control"
            />
          </ScrollAnimation>
        </div>
        <div>
          {webAppContext.webAppState.screenWidth <= 767 ? (
            <div className="pull-up">
              <ScrollAnimation animateIn="fadeInUp" duration={5}>
                <HomeContent
                  position="1"
                  pixs={pix2}
                  writeUp="Accessibility… wherever you are, you can track your progress"
                />
              </ScrollAnimation>
            </div>
          ) : (
            <div>
              {webAppContext.webAppState.screenWidth <= 767 ? (
                <div className="pull-up">
                  <ScrollAnimation animateIn="fadeInUp" duration={5}>
                    <HomeContent
                      position="1"
                      pixs={pix2}
                      writeUp="Accessibility… wherever you are, you can track your progress"
                    />
                  </ScrollAnimation>
                </div>
              ) : (
                <div>
                  <ScrollAnimation animateIn="fadeInUp" duration={5}>
                    <HomeContent
                      position="1"
                      pixs={pix2}
                      writeUp="Accessibility… wherever you are, you can track your progress"
                    />
                  </ScrollAnimation>
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          {webAppContext.webAppState.screenWidth <= 767 ? (
            <div className="pull-up">
              <ScrollAnimation
                duration={5}
                initiallyVisible={true}
                animateIn="tada"
              >
                <HomeContent
                  position="0"
                  pixs={pix3}
                  writeUp="Integrity… single source of truth for all shared documents"
                />
              </ScrollAnimation>
            </div>
          ) : (
            <div>
              <ScrollAnimation
                duration={5}
                initiallyVisible={true}
                animateIn="tada"
              >
                <HomeContent
                  position="0"
                  pixs={pix3}
                  writeUp="Integrity… single source of truth for all shared documents"
                />
              </ScrollAnimation>
            </div>
          )}
        </div>
        <div>
          {webAppContext.webAppState.screenWidth <= 767 ? (
            <div className="pull-up">
              <ScrollAnimation animateIn="zoomIn" initiallyVisible={true}>
                <HomeContent
                  position="1"
                  pixs={pix4}
                  writeUp="Efficiency… doing more with our governance, risk and compliance"
                />
              </ScrollAnimation>
            </div>
          ) : (
            <div>
              <ScrollAnimation animateIn="zoomIn" initiallyVisible={true}>
                <HomeContent
                  position="1"
                  pixs={pix4}
                  writeUp="Efficiency… doing more with our governance, risk and compliance"
                />
              </ScrollAnimation>
            </div>
          )}
        </div>

        <div>
          {webAppContext.webAppState.screenWidth <= 767 ? (
            <div className="pull-up">
              <ScrollAnimation
                delay={1000}
                animateIn="rubberBand"
                initiallyVisible={true}
              >
                <HomeContent
                  position="0"
                  pixs={pix5}
                  writeUp="Effectiveness… our organization is top notch"
                />
              </ScrollAnimation>
            </div>
          ) : (
            <div>
              <ScrollAnimation
                delay={1000}
                animateIn="rubberBand"
                initiallyVisible={true}
              >
                <HomeContent
                  position="0"
                  pixs={pix5}
                  writeUp="Effectiveness… our organization is top notch"
                />
              </ScrollAnimation>
            </div>
          )}
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
