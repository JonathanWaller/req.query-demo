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
    axios.get(`/api/filter?songName=${this.state.userInput}`).then(response => {
      console.log(response);
      this.setState({ music: response.data });
    });
  };

  render() {
    console.log(this.state);
    let myMusic = this.state.music.map((song, ind) => {
      return (
        <div key={ind}>
          <div>
            #{ind + 1}: {song}
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Req.query demo</h1>
        </header>

        <input
          className="inputField"
          onChange={e => this.handleInput(e)}
          placeholder="Filter by Song Title"
        />
        <button onClick={() => this.handleClick()}>Submit</button>
        <h3>My Songs</h3>
        <div className="listWrapper">
          <div className="songList">{myMusic}</div>
        </div>
      </div>
    );
  }
}

export default App;
