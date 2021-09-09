import React from "react";
import "../styles/Button.css";

class Button extends React.Component {
    render() {
        return (
            <button 
            type="button"
            style={this.props.style} 
            className={`btn btn-${this.props.variant}`}>
                {this.props.text}
            </button>
        )
    }
}

export default Button