import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchTasks} from "./services/tasks";
import axios from "axios";


class App extends Component {
  componentDidMount() {
    // axios.get('http://localhost:3000/tasks')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    fetchTasks.then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
