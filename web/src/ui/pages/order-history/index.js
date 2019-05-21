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
      orders: [],
      groupedOrders: []
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
            this.setState({ orders: response.data.orders });
            console.log("current page state: ", this.state);
          })
          .catch(err => {
            console.log("Error fetching order");
          });
      })
      .catch(err => {
        console.log("Error fetching ID token");
        console.log("new user state: ", this.state.user);
        console.log("current order state: ", this.state.orders);
      });
  }

  groupOrdersByID = () => {
    console.log(...this.state.orders);
  };

  render() {
    this.groupOrdersByID();
    return (
      <div styleName="container">
        Current UserName's Order History
        <div styleName="order-list" />
      </div>
    );
  }
}

export default CSSModules(OrderHistory, css);
