import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = (props) => {
    const { variant, text } = props;
    return (
        <button 
        type="button"
        style={props.style} 
        className={`btn btn-${variant}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button