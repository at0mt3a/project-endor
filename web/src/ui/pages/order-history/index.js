import React, { Component } from "react";
import CSSModules from "react-css-modules";

import { Link } from "react-router-dom";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      orders: []
    };
  }

  componentDidMount() {
    axiosWrapper
      .get("/auth/jwt/login")
      .then(response => {
        this.setState({ user: response.data.user });
        const { userHandle } = response.data.user;
        axiosWrapper
          .get(`/orders/${userHandle}`)
          .then(response => {
            this.setState({ orders: response.data.orderHistory });
            console.log("order history HERE ----->", response);
            console.log("current page state: ", this.state);
          })
          .catch(err => {
            console.log("Error fetching order");
          });
      })
      .catch(err => {
        console.log("ERROR fetching ID token");
        console.log("user state: ", this.state.user);
        console.log("order state: ", this.state.orders);
      });
  }

  render() {
    return (
      <div styleName="container">
        User's Order History
        <div styleName="order-list">
          {this.state.orders.map((order, index) => (
            <div styleName="single-order" key={index}>
              <div>Order ID: {order.orderId}</div>
              <div>Order Date: {order.orderDate[0]}</div>
              <br />
              <div styleName="item-list">
                {order.items.map((item, index) => (
                  <div key={index}>
                    <Link to={`/items/${item.id}`}>{`"${item.name}" `}</Link>
                    {`- Price: $${item.price}, Quantity: ${item.quantity}`}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CSSModules(OrderHistory, css);
