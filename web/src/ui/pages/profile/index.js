import React, { Component } from "react";
import CSSModules from "react-css-modules";

import { Link } from "react-router-dom";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/auth/jwt/login")
      .then(response => {
        console.log("here is the current user response", response);
        this.setState({ user: response.data.user });
      })
      .catch(err => {
        console.log("Error fetching current user login token");
      });
  }

  render() {
    return (
      <div styleName="profile-container">
        <div styleName="img-container">image</div>
        <div styleName="inner-container">
          <div styleName="user-info">user blurb</div>
          <div styleName="link-cont">
            <Link to="/order-history">Order History</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Profile, css);
