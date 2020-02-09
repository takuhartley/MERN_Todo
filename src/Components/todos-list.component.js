import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export class TodosList extends Component {
  constructor(props) {
      super(props) {
          this.state = {todos: []};
      }
  }
    render() {
    return (
      <div>
        <h1>Todos List</h1>
      </div>
    );
  }
}

export default TodosList;
