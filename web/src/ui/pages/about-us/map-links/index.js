import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { arrayOf, shape, string } from "prop-types";
import css from "./index.css";

class MapLinks extends Component {
  static propTypes = {
    items: arrayOf(
      shape({
        name: string.isRequired
      })
    )
  };
  render() {
    if(!this.props.items)
      return <div>loading...</div>
    );
    return this.props.items.map((item, index) => ()
    //  return <li styleName="container">{this.props.children}</li>;
 }} }


export default CSSModules(MapLinks, css);
