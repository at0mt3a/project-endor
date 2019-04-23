/* eslint-disable no-console */
import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";

class Footer extends Component {
  render() {
    return <footer styleName="footer">Here's our footer</footer>;
  }
}

export default CSSModules(Footer, css);
