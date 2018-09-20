import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
      userInput: ""
    };
  }

  componentDidMount() {
    axios.get("/api/music").then(response => {
      // console.log(response);
      this.setState({ music: response.data });
    });
  }

  handleInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = () => {
    axios.get(`/api/filter?name=${this.state.userInput}`).then(response => {
      console.log(response);
      this.setState({ music: response.data });
    });
  };

  render() {
    console.log(this.state);
    let myMusic = this.state.music.map((song, ind) => {
      return (
        <div key={ind}>
          <div>{song}</div>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Req.query demo</h1>
        </header>
        <input onChange={e => this.handleInput(e)} placeholder="search song" />
        <button onClick={() => this.handleClick()}>Search</button>
        {myMusic}
      </div>
    );
  }
}

export default App;
