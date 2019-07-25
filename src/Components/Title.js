import React, { Component } from "react";
import Photo from "./Photo";

import "../Styles/stylesheet.css";

class Title extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Title;
