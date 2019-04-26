import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      allItems: []
    };
  }

  componentDidMount() {
    axiosWrapper
      .get("/items")
      .then(response => {
        console.log("here is the item response", response);
        this.setState({ allItems: response.data.items });
      })
      .catch(err => {
        this.setState({ error: true });
        console.log("Error fetching items");
      });
  }

  renderItems() {
    return this.state.allItems.map(item => {
      <div className="item-display">item #{item.id}</div>;
    });
  }

  render() {
    console.log(this.state.allItems);
    if (!this.state.allItems.length) {
      return <div>No Items to display on Landing</div>;
    } else
      return (
        <div>
          <div>this is our landing page</div>
          <div>{this.renderItems()}</div>
        </div>
      );
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
