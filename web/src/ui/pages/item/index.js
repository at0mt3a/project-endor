import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    axiosWrapper
      .get(`/items/${this.props.match.params.id}`)
      .then(response => {
        console.log("here is the item response", response);
        this.setState({ item: response.data.item });
      })
      .catch(err => {
        console.log("Error fetching item", err);
      });
  }

  render() {
    console.log("here", this.props);
    console.log("current item from db:", this.state.item);
    const { item } = this.state;
    if (!item) {
      return <div>loading...</div>;
    }

    return (
      <div styleName="container">
        <div styleName="title">This is our Item page</div>
        <div styleName="item-container">
          <div> - {item.itemName} - </div>
          <div>Category: {item.category}</div>
          <div>Price: {item.price} ingots</div>
          <div>Description: {item.description}</div>
          <div>Seller: {item.seller}</div>
        </div>
      </div>
    );
  }
}

export default protectedRoute(CSSModules(Item, css));
