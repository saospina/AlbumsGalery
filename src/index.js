import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import albums from "./sample/albums.json";

// Components
import ArtistInfo from "./components/ArtistInfo";
//import ArtistRate from "./components/ArtistRate";

class App extends Component {
  state = {
    albums: albums
  };
  render() {
    return (
      <div className="App container">
        <h1 className="my-5">Galeria de albumes</h1>
        <hr className="border border-danger my-5" />
        <ArtistInfo albums={this.state.albums} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
