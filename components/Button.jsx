import React from "react";
import "../css/Button.css"

function Button({displyText = "Button", textColor, borderColor, bgColor,shadowColor}) {

    const border = `solid 3px  ${borderColor}`
    const boxShadow = `0px 4px 2px ${shadowColor}`

    return (
        <div id="btn-div" 
            style={{
                backgroundColor: bgColor,
                color: textColor,
                border: border,
                boxShadow: boxShadow,
            }}
        >
              <p className="btn-text"> {displyText} </p>
        </div>
    )
}

export default Button