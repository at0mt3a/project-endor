/* eslint-disable no-console */
import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        <div>smells like feet down here...</div>
      </footer>
    );
  }
}

export default CSSModules(Footer, css);
