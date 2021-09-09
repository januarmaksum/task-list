import React from "react";
import Button from "./Button";

class TodoItem extends React.Component {
    render() {
        return (
            <div style={todoItems}>
                <h3>This is task one</h3>
                <div>
                    <Button text="edit" variant="success"/>
                    <Button text="delete" variant="danger" style={customStyleButton}/>
                </div>
            </div>
        )
    }
}

const todoItems = {
    display: "flex",
    padding: "16px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#218dfd",
    color: "#fff"
}

const customStyleButton = {
    marginLeft: "15px"
}

export default TodoItem