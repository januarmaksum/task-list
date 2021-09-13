import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import FormInput from "./FormInput";
import "../styles/App.css";

class App extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "reading a book"
            },
            {
                id: 2,
                title: "playing game fifa mobile"
            }
        ]
    }
    render() {
        const { todos } = this.state
        return (
            <div className="container">
                <Header/>
                {todos.map(item =>
                    <TodoItem key={item.id} todo={item.title} />
                )}
                <FormInput/>
            </div>
        )
    }
}

export default App