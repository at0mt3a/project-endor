import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        images: []
      },
      quantity: 1
    };
  }

  addItemToCart = event => {
    event.preventDefault();
    this.props.updateCart(this.state.item.itemId, this.state.quantity);
    console.log("ITEM PAGE STATE:", this.state);
  };

  updateQuantity = event => {
    event.preventDefault();
    this.setState({ quantity: parseInt(event.target.value) });
  };

  componentDidMount() {
    console.log("from props", this.props);
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
    console.log("here be the props", this.props);
    console.log("current state:", this.state);
    const { item } = this.state;
    if (!item) {
      return <div>loading...</div>;
    }
    return (
      <div styleName="container">
        <div styleName="title">Inspect thine item of interest below.</div>
        <div styleName="item-container">
          <div>
            {item.images.map((image, index) => {
              return (
                <div key={index} styleName="item-image-container" value={image}>
                  <img
                    src={process.env.PUBLIC_URL + image}
                    styleName="item-image"
                    alt="item-image"
                  />
                </div>
              );
            })}
          </div>
          <div> - {item.itemName} - </div>
          <div>Category: {item.category}</div>
          <div>Price: {item.price} ingots</div>
          <div>Description: {item.description}</div>
          <div>Seller: {item.seller}</div>
          <input
            type="number"
            value={this.state.quantity}
            onChange={this.updateQuantity}
          />
          <button type="button" onClick={this.addItemToCart}>
            Add Item to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default protectedRoute(CSSModules(Item, css));
