import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";
import ItemDisplay from "../../components/item-display/index.js";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      allItems: [],
      itemDisplay: true,
      updatedItem: {}
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

  renderItemDisplay = () => {
    switch (this.state.itemDisplay) {
      case true:
        return (
          <div>
            <ItemDisplay currentItem={this.state.itemDisplay} />
          </div>
        );
      default:
        return <div> i'll bite yer legs off</div>;
    }
  };

  updateItemDisplay = event => {
    event.preventDefault();
    this.setState({
      itemDisplay: event.target.value
    });
    console.log(this.state.itemDisplay);
  };

  renderItems() {
    return this.state.allItems.map((item, index) => {
      return (
        <div
          key={index}
          styleName="item"
          type="button"
          value={this.state.allItems[index].itemName}
          onClick={this.updateItemDisplay}
        >
          "{item.itemName}", {item.category}, price: {item.price} ingots
        </div>
      );
    });
  }

  render() {
    console.log("this.state.allItems : ", this.state.allItems);
    if (!this.state.allItems.length) {
      return <div>No Items to display on Landing</div>;
    } else
      return (
        <div styleName="container">
          <div styleName="title">this is our landing page</div>
          <div styleName="shelf">{this.renderItems()}</div>
          <div>{this.renderItemDisplay()}</div>
        </div>
      );
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
