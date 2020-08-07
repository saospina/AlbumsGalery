import React, { Fragment, Component } from "react";
import "../styles.css";
import ArtistRate from "./ArtistRate.jsx";

class ArtistInfo extends Component {
  render() {
    return this.props.albums.map(e => (
      <div key={e.id} className="card-columns">
        <div className="card">
          <img src={e.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{e.name}</h5>
            <h5 className="card-title">{e.artist}</h5>
            <p className="card-text">
              <small className="text-muted">{e.year}</small>
            </p>
            <ArtistRate rating={e.rating} liked={e.liked} />
          </div>
        </div>
      </div>
    ));
  }
}

export default ArtistInfo;
