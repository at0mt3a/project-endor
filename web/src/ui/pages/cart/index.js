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

  getData() {
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
            console.log("user state: ", this.state.user);
            console.log("INDEX SUCCESS order state: ", this.state.orderPlaced);
          })
          .catch(err => {
            console.log("Error fetching cart");
          });
      })
      .catch(err => {
        console.log("ERROR fetching ID token");
        console.log("user state: ", this.state.user);
        console.log("order state: ", this.state.orderPlaced);
      });
  }

  placeOrderFromCart = event => {
    event.preventDefault();
    axiosWrapper.post("/cart/place-order", {}).then(response => {
      console.log("ORDER HAS BEEN PLACED", response);
      this.setState({ orderPlaced: true });
    });
  };

  deleteCartItem = (event, userHandle, item) => {
    event.preventDefault();
    console.log(
      `INDEX.js -- deleteCartItem IS CALLED, path: /cart/${userHandle}/${item}`
    );
    axiosWrapper
      .del(`/cart/${userHandle}/${item}`)
      .then(response => {
        let deleteCount = response.data.results.rows[0].item_id;
        console.log("ITEM DELETED", response);
      })
      .then(response => {
        this.getData();
      });
  };

  componentDidMount() {
    this.getData();
  }

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
              <button
                type="button"
                onClick={event =>
                  this.deleteCartItem(
                    event,
                    this.state.user.userHandle,
                    item.name
                  )
                }
              >
                X
              </button>
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
