/* eslint-disable no-console */
import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";

class ItemDisplay extends Component {
  renderCurrentItem = () => {
    return <span>{this.props.currentItem.itemName}</span>;
  };

  render() {
    /*
    const { creator, updatedCreator, updateCreator } = this.props;
    if (creator && creator.firstName) {
      return (
        <div>
          <form
            onSubmit={event =>
              this.props.submitCreatorUpdate(event, creator.userHandle)
            }
          >
            <div>
              <input
                type="text"
                value={updatedCreator.firstName}
                name="firstname"
                placeholder="First Name"
                onChange={updateCreator}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              onClick={this.props.submitCreatorUpdate}
            />
          </form>
        </div>
      );
    }
    return null;
    */
    return (
      <div>
        <div styleName="item-display-container">
          waaaaaah, it's a "{this.renderCurrentItem()}"! edit the "
          {this.renderCurrentItem()}" here.
        </div>
      </div>
    );
  }
}

export default CSSModules(ItemDisplay, css);
