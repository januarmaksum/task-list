import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
    return (
        <div>
            <img style={headerLogo} src={Logo} alt="logo"/>
            <h1 style={headerTitle}>React Todo App</h1>
        </div>
    )
}

const headerLogo = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "110px",
    display: "block"
}

const headerTitle = {
    fontSize: "38px",
    fontWeight: "700",
    textAlign: "center"
}

export default Header