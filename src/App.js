import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import CreateTodo from "./Components/create-todo.component";
import EditTodo from "./Components/edit-todo.component";
import TodosList from "./Components/todos-list.component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />

      <div className="container">
        <h1>Mern Stack Todo App</h1>
      </div>
    </Router>
  );
}

export default App;
