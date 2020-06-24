import React from "react";
import axios from "axios";
import "./App.css";
import anime from "animejs/lib/anime.es.js";
import { ReportBase } from "istanbul-lib-report";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    // excuted when render runs
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice") // fetching to API
      .then(response => {
        console.log(response);
        // then -> what to do with fetched data
        const { advice } = response.data.slip; // destructing repsone
        this.setState({ advice: advice }); // setting state
      })
      .catch(error => {
        // catch -> if a error occurs during the get
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
