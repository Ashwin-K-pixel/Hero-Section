import React from "react";
import "../css/Navbar.css"
import scooter from "../images/scooter-logo.png"
import Button from "../components/Button"

function Navbar() { 
    return (

        <header> 
            <div id="navbar-div">

                <div id="scooter-img-div"> 
                    <img src={scooter}></img>
                </div>

                <div className="mid-navbar-div">
                    <a className="link-text" href="" > Home </a>
                    <a className="link-text" href="" > Services </a>
                    <a className="link-text" href="" > Contact us </a>
                </div> 

                <div className="right-navbar-div">
                       <a className="link-text" href=""> Login </a>
                       <Button
                            displyText="Book Scooter"
                            bgColor="#EF8D21"
                            textColor= "white"
                       />
                </div>

            
            </div>    
        </header>
    )
}

export default Navbar
