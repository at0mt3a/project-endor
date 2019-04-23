import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class LandingPage extends Component {
  render() {
    return <div>this is our landing page</div>;
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
