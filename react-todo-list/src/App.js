import React from "react"
import TodoItem from "./components/TodoItem"

function App() {
    return (
        <div className="app">
            <h1 className="header">To Do List</h1>            
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App