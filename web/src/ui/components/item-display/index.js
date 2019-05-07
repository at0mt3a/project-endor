/* eslint-disable no-console */
import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";

class ItemDisplay extends Component {
  renderCurrentItem = () => {
    return <span>{this.props.currentItem.itemName}</span>;
  };

  render() {
    return (
      <div>
        <div styleName="item-display-container">
          waaaaaah, it's a "{this.renderCurrentItem()}"! edit the "
          {this.renderCurrentItem()} here.
        </div>
      </div>
    );
  }
}

export default CSSModules(ItemDisplay, css);
