import React from "react";
import Button from "./Button";

class FormInput extends React.Component {
    render() {
        return (
            <form style={formsInput}>
                <input 
                    type="text"
                    style={input}
                    placeholder="add task"
                />
                <Button text="add" variant="primary" />
            </form>
        )
    }
}

const formsInput = {
    backgroundColor: "#fff",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between"
}

const input = {
    border: "none",
    width: "90%"
}

export default FormInput