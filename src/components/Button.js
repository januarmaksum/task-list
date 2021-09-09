import React from "react";
import "../styles/Button.css";

const Button = props => {
    return (
        <button 
        type="button"
        style={props.style} 
        className={`btn btn-${props.variant}`}>
            {props.text}
        </button>
    )
}

export default Button