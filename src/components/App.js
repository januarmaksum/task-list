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
    deleteTask = id => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }
    addTask = data => {
        const id = this.state.todos.length
        const newData = {
            id: id + 1,
            title: data
        }
        this.setState({
            todos: [...this.state.todos, newData]
        })
    }
    render() {
        const { todos } = this.state
        return (
            <div className="container">
                <Header/>
                {todos.map(item =>
                    <TodoItem key={item.id} todo={item} deleteItem={this.deleteTask} />
                )}
                <FormInput add={this.addTask}/>
            </div>
        )
    }
}

export default App