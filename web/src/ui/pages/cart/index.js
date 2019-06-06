import React, { Component } from "react";
import CSSModules from "react-css-modules";

import { Link } from "react-router-dom";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {
        items: []
      }
    };
  }

  componentDidMount() {
    axiosWrapper
      .get("/auth/jwt/login")
      .then(response => {
        this.setState({ user: response.data.user });
        const { userHandle } = response.data.user;
        axiosWrapper
          .get(`/cart/contents/${userHandle}`)
          .then(response => {
            this.setState({ cart: response.data.cartContents[0] });
            console.log("cart state HERE ----->", this.state.cart);
          })
          .catch(err => {
            console.log("Error fetching cart");
          });
      })
      .catch(err => {
        console.log("ERROR fetching ID token");
        console.log("user state: ", this.state.user);
        console.log("order state: ", this.state.orders);
      });
  }

  placeOrderFromCart = currentCartUser => {
    event.preventDefault();
    axiosWrapper
      .post("/cart/place-order", { currentCartUser })
      .then(response => {});
  };

  // addItemToCart = (itemId, quantity) => {
  //   event.preventDefault();
  //   axiosWrapper
  //     .post("/cart/add", { items: [{ id: itemId, quantity }] })
  //     .then(res => {
  //       console.log("response from the backend", res);
  //       this.setState({
  //         cart: parseInt(this.state.cart) + quantity
  //       });
  //     })
  //     .catch(err => {
  //       console.log(`Something bad happened... handle it ${err}`);
  //       console.log(`BASE STATE`, this.state);
  //     });
  // };

  render() {
    return (
      <div styleName="container">
        User's Current Cart
        <div styleName="cart">
          {this.state.cart.items.map((item, index) => (
            <div styleName="single-item" key={index}>
              <div>Item: {item.name}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          ))}
        </div>
        <div>
          <br />
          <button type="button" onClick={this.placeOrderFromCart}>
            Place order with Cart
          </button>
        </div>
      </div>
    );
  }
}

export default CSSModules(Cart, css);
