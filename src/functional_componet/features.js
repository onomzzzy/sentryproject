import React from "react"
import Footer from "./footer";
import pix from "../icons/Finalized.png";

import "../css/features.css"; 
import {HomeCarouselWithoutText} from "../functional_componet/homestaticcarousel";
import FeaturesBox from "./features-box";

const Features = () => {
    return (  <div>
        <div>
            <HomeCarouselWithoutText innerText="Effective and efficient features that helps automate your governance, risk management and compliance programs."/>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FeaturesBox />
          </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="p-2">Instead of keeping the organization’s data in separate “silos”, administrators can use a single framework to monitor compliance and enforce rules and procedures.
            </h4>
            <p className="p-2">This will allow your organization to manage risk efficiently, reduce costs incurred by multiple installations and minimize complexity for managers.</p>
          </div>
          <div className="col-md-6">
            <img className="image-style" src={pix} />
          </div>
        </div>
        </div>
        
      
        <div>
        <Footer />
        </div>
    </div>);
}
 
export default Features