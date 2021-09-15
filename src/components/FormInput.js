import React from "react";
import Button from "./Button";

class FormInput extends React.Component {
    state = {
        text: ""
    }
    change = e => {
        this.setState({ text: e.target.value })
    }
    submit = e => {
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.add(this.state.text)
            this.setState({ text: "" })
        }
    }
    render() {
        return (
            <form style={formsInput} onSubmit={this.submit}>
                <input 
                    type="text"
                    style={input}
                    placeholder="add task"
                    value={this.state.text}
                    onChange={this.change}
                />
                <Button text="add" variant="primary" action={this.submit} />
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