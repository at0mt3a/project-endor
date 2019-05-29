// import omit from 'lodash/omit'
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSModules from "react-css-modules";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0
    };
  }

  //create method to update state of numOfItemsInCart
  //alter local state
  //call backend to update table
  // success - update state
  // failure - sold out

  addItemToCart = (event, itemId) => {
    event.preventDefault();
    this.setState({
      cart: this.state.cart + 1
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
                  addItemToCart={this.addItemToCart}
                  match={match}
                  cart={this.state.cart}
                />
              )}
            />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/order-history" component={OrderHistory} />
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
