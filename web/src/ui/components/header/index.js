import React, { Component } from "react";
import { Link } from "react-router-dom";
import CSSModules from "react-css-modules";

import connected from "../../../state/connect";
import { selector as user } from "../../../process/users/reducer";
import css from "./index.css";
import UserLinks from "./user-dropdown";
import DefaultLinks from "./nav-links";

class Header extends Component {
  render() {
    const { active } = this.props.user;
    const rightSide = active ? <UserLinks /> : <DefaultLinks />;

    return (
      <div styleName="container">
        <Link to="/">
          <div styleName="logo">Logo</div>
        </Link>
        <div styleName="active-links">{rightSide}</div>
      </div>
    );
  }
}

export default connected([user], [])(CSSModules(Header, css));
