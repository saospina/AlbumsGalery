import React, { Component } from "react";
import "../styles.css";

export default class ArtistRate extends Component {
  state = {
    stars: []
  };

  handleStars() {
    const { rating } = this.props;
    const stars = [...Array(rating).keys()];
    this.setState({ stars });
  }

  componentDidMount() {
    this.handleStars();
  }

  render() {
    return (
      <div>
        {this.state.stars.map(star => (
          <i key={star} className="fa fa-star" aria-hidden="true" />
        ))}
        <br />
        {this.props.liked && <i className="fa fa-heart" aria-hidden="true" />}
      </div>
    );
  }
}
