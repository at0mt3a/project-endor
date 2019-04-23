import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";

class Spotlight extends Component {
  render() {
    const { creator, updatedCreator, updateCreator } = this.props;
    if (creator && creator.firstName) {
      return (
        <div>
          <div>
            <div>{creator.firstName}</div>
            <div>{creator.email}</div>
          </div>
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
  }
}

export default CSSModules(Spotlight, css);
