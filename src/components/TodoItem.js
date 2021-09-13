import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const TodoItem = (props) => {
    const {todo} = props
    console.log(todo)
    return (
        <div style={todoItems}>
            <h3 style={todoTitle}>{todo}</h3>
            <div>
                <Button text="edit" variant="success"/>
                <Button text="delete" variant="danger" style={customStyleButton}/>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.string
}

const todoItems = {
    display: "flex",
    padding: "16px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#218dfd",
    color: "#fff",
    marginBottom: "15px"
}

const todoTitle = {
    margin: "0"
}

const customStyleButton = {
    marginLeft: "15px"
}

export default TodoItem