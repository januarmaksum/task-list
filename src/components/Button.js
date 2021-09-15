import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = props => {
    const { variant, text, action } = props;
    return (
        <button 
        type="button"
        style={props.style} 
        className={`btn btn-${variant}`}
        onClick={action}>
            {text}
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    action: PropTypes.func
}

export default Button