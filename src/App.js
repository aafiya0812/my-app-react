import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { API_BASE_URL } from './config';
import axios from 'axios';

/*function App() {
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

export default App;*/

class CarColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        console.log(`${process.env.REACT_APP_API_BASE_URL}`);
        axios.get(process.env.REACT_APP_API_BASE_URL+`/users`)
        .then((response) => {
            console.log(response);
        })
        // this.setState({color: "blue"});
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                type="button"
                onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}

export default CarColor;
