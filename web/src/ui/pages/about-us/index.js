import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import Spotlight from "../../components/spotlight";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [],
      creator: {},
      updatedCreator: {}
    };
  }

  componentDidMount() {
    axiosWrapper
      .get("/creators")
      .then(response => {
        console.log("here is the about response", response);
        this.setState({ creators: response.data.creators });
      })
      .catch(err => {
        console.log("Error fetching featured conrtibutors");
      });
  }

  fetchCreatorDetails = (event, userHandle) => {
    event.preventDefault();
    axiosWrapper
      .get(`/creators/${userHandle}`)
      .then(response => {
        console.log("spotlight response", response);
        this.setState({
          creator: response.data.creator,
          updatedCreator: response.data.creator
        });
      })
      .catch(err => {
        console.log("Error fetching featured conrtibutors");
      });
    console.log("you clicked on ", userHandle);
  };

  updateCreator = event => {
    event.preventDefault();
    console.log(
      "here i am, text is changing",
      event.target,
      event.target.value
    );
    this.setState({
      updatedCreator: {
        ...this.state.updatedCreator,
        firstName: event.target.value
      }
    });
  };

  submitCreatorUpdate = (event, userHandle) => {
    event.preventDefault();
    axiosWrapper
      .put(`/creators/${userHandle}`, { creator: this.state.updatedCreator })
      .then(response => {
        console.log("updated response", response);
        this.setState({ creator: response.data.creator });
      })
      .catch(err => {
        console.log("Error fetching featured conrtibutors");
      });
    console.log("you clicked on ", userHandle);
  };

  /*
  renderSpotlight = () => {
    const { creator } = this.state;
    if (creator && creator.firstName) {
      return (
        <div>
          <div>
            <div>{creator.firstName}</div>
            <div>{creator.email}</div>
          </div>
          <form
            onSubmit={event =>
              this.submitCreatorUpdate(event, creator.userHandle)
            }
          >
            <div>
              <input
                type="text"
                value={creator.firstName}
                name="firstname"
                placeholder="First Name"
                onChange={this.updateCreator}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              onClick={this.submitCreatorUpdate}
            />
          </form>
        </div>
      );
    }
    return null;
  };

  */

  render() {
    return (
      <div styleName="container">
        <div styleName="about-left">
          <ol>
            {this.state.creators.map((creator, index) => {
              return (
                <li
                  key={index}
                  onClick={event =>
                    this.fetchCreatorDetails(event, creator.userHandle)
                  }
                >
                  {creator.firstName}
                </li>
              );
            })}
          </ol>
        </div>
        <div styleName="about-right">
          <Spotlight
            submitCreatorUpdate={this.submitCreatorUpdate}
            updateCreator={this.updateCreator}
            creator={this.state.creator}
            updatedCreator={this.state.updatedCreator}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(AboutUs, css);
