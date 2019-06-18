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
      },
      orderPlaced: false
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

  placeOrderFromCart = event => {
    event.preventDefault();
    axiosWrapper.post("/cart/place-order", {}).then(response => {
      console.log("ORDER HAS BEEN PLACED", response);
      this.setState({ orderPlaced: true });
    });
  };

  render() {
    const { cart, orderPlaced } = this.state;

    if (orderPlaced) {
      return <div>order has been placed</div>;
    }

    if (!cart) {
      return <div>User's cart is empty</div>;
    }

    return (
      <div styleName="container">
        User's Current Cart
        <div styleName="cart">
          {cart.items.map((item, index) => (
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
