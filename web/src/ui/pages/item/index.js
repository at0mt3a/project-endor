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
      }
    };
  }

  addThisItem;

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
    console.log("current item state:", this.state.item);
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
          <button type="button" onClick={this.props.addItemToCart}>
            Add Item to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default protectedRoute(CSSModules(Item, css));
