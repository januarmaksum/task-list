import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import FormInput from "./FormInput";
import "../styles/App.css";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <TodoItem/>
                <FormInput/>
            </div>
        )
    }
}

export default App