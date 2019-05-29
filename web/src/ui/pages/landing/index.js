import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";
import ItemDisplay from "../../components/item-display/index.js";
import { Route, Link } from "react-router-dom";

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
    return this.state.allItems.map((item, index) => {
      return (
        <div
          key={index}
          styleName="item"
          value={this.state.allItems[index].itemName}
        >
          <Link to={`/items/${this.state.allItems[index].itemId}`}>
            "{item.itemName}"
          </Link>
          , {item.category}, price: {item.price} ingots
        </div>
      );
    });
  }

  render() {
    console.log("this.state.allItems : ", this.state.allItems);
    if (!this.state.allItems) {
      return <div>No Items to display on Landing</div>;
    } else
      return (
        <div styleName="container">
          <div styleName="title">View ye here our goods for sale!</div>
          <div styleName="shelf">{this.renderItems()}</div>
        </div>
      );
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
