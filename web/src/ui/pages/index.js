// import omit from 'lodash/omit'
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../utilities/axios/wrapper";

import css from "./index.css";
import Header from "../components/header";
import Footer from "../components/footer";

import Landing from "./landing";
import Home from "./homepage/";
import Login from "./login/";
import SignOut from "./sign-out";
import AboutUs from "./about-us";
import Item from "./item";
import Profile from "./profile";
import OrderHistory from "./order-history";
import Cart from "./cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
      user: {}
    };
  }

  componentDidMount() {
    axiosWrapper
      .get("/auth/jwt/login")
      .then(response => {
        this.setState({ user: response.data.user });
        const { userHandle } = response.data.user;
        axiosWrapper
          .get(`/cart/quantity/${userHandle}`)
          .then(response => {
            this.setState({
              cart: parseInt(response.data.cartQuantity[0].cartQuantity)
            });
          })
          .catch(err => {
            console.log("Error fetching cart quantity");
            console.log("cart state", this.state.cart);
            console.log("user state", this.state.user);
          });
      })
      .catch(err => {
        console.log("ERROR fetching ID token");
        console.log("user state: ", this.state.user);
        console.log("cart state: ", this.state.cart);
      });
  }

  //create method to update state of numOfItemsInCart
  //alter local state
  //call backend to update table
  // success - update state
  // failure - sold out

  addItemToCart = (itemId, quantity) => {
    event.preventDefault();
    axiosWrapper
      .post("/cart/add", { items: [{ id: itemId, quantity }] })
      .then(res => {
        console.log("response from the backend", res);
        this.setState({
          cart: parseInt(this.state.cart) + quantity
        });
      })
      .catch(err => {
        console.log(`Something bad happened... handle it ${err}`);
        console.log(`BASE STATE`, this.state);
      });
  };

  render() {
    return (
      <div styleName="App">
        <div styleName="header-container">
          <Header cart={this.state.cart} />
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/login" component={Login} />,
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/sign-out" component={SignOut} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route
              exact
              path="/items/:id"
              render={({ match }) => (
                <Item
                  updateCart={this.addItemToCart}
                  match={match}
                  cart={this.state.cart}
                />
              )}
            />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/order-history" component={OrderHistory} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
        <div styleName="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, css);
