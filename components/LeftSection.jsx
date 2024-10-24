import React from "react";
import '../css/LeftSection.css'
import Button from "./Button";
import leftLeaftImg from "../images/left-leaf-img.png"

function LeftSection() {

    return(
        <div id="left-section-div">

            <div>

            </div>

            <div className="fair-price-text-div">
                <h2 className="fair-price-text"> Fair pice ride </h2> 
            </div>

            <div className="rent-our-scooter-div">
                <h1 className="rent-our-scooter-text"> <spam className="rent-text"> Rent our </spam> <spam className="scooter-text"> Scooter </spam> </h1>
            </div>

            <div className="left-section-description-div"> 
                <p className="left-section-description-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>

            <div className="navig-div">
                <div className="navig-element">
                    <p className="navig-text"> Location </p>
                </div>

                <div className="navig-element">
                    <p className="navig-text"> Pickup Date </p>
                </div>

                <div className="navig-element">
                    <p className="navig-text"> Kilomters </p>
                </div>

                <Button 
                    bgColor="white"
                    textColor="black"
                    borderColor="black"
                    shadowColor="#EF8D21"
                />
            </div>

            <div className="left-leaf-img-div">
                <img src={leftLeaftImg} />
            </div>

        </div>
    )
}

export default LeftSection