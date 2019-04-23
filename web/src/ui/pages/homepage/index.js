import React, { Component } from "react";
import CSSModules from "react-css-modules";

import { Link } from 'react-router-dom'
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOfTheDay: ""
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/daily/message")
      .then(response => {
        console.log("here is the homepage response", response);
        this.setState({ messageOfTheDay: response.data.message.dailyMessage });
      })
      .catch(err => {
        console.log("Error fetching daily message");
      });
  }

  render() {
    const { messageOfTheDay } = this.state;

    return (
      <div styleName="homepage-container">
        <Link to="/about-us">About Us</Link>
        <div styleName="daily-message">{messageOfTheDay}</div>
      </div>
    );
  }
}

export default CSSModules(Homepage, css);
