import React from "react";
import scooterImg from "../images/scooter-img.png"
import "../css/RightSection.css"
import rightLeafImg from "../images/right-leaf-img.png"

function RightSection() {
    return(
        <div id="right-section-div"> 
            <div className="scooter-img-div">
                <img src={scooterImg} alt="Scooter image is displayed here" className="sccoter-img" />
            </div>  

            <div className="starting-from-div">
                <div className="starting-from-text-div"> 
                    <p className="starting-from-text"> 
                        Starting  From <br/>
                    </p>
                </div>

                <div className="starting-from-price-text-div">
                    <span className="starting-from-price-text">  $40</span>
                </div>

                <div className="right-leaf-div">
                    <img src={rightLeafImg} />
                </div>
            </div>

            
        </div>
    ) 

}

export default RightSection

