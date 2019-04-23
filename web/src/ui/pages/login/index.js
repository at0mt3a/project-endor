// TODO Challenge 4
// Add a loading spinner for when waiting on the API to give the green light
// Show an error message when the use enters bad data.
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { Button, Icon, Input } from 'semantic-ui-react'

import css from './index.css'
import { loginProcess } from '../../../process/users/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: false
    }
  }

  handleInputEmail = (event) => {
    event.preventDefault()
    this.setState({ email: event.target.value })
  }

  handleInputPassword = (event) => {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }

  handleSubmit = () => {
    event.preventDefault()
    console.log("Submit")
    const { email, password } = this.state
    this.props.loginProcess(email, password)
  }

  render() {
    return (
      <div>
        <div styleName="title">Welcome to Helio Challenges</div>
        <div styleName="description"> Sign in with your information below</div>
        {this.state.loading ? <div styleName="loading" /> : null}
        {this.state.error ? <div>Please provide a correct email</div> : null}
        <form styleName="form" onSubmit={this.handleSubmit}>
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Email" type="text"
            value={this.state.email} onChange={this.handleInputEmail} />
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Enter Password" type="password"
            value={this.state.password} onChange={this.handleInputPassword} />
          <Button type="submit" animated color="green" onClick={this.handleSubmit}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </form>
        <Link to="/forgotten-password">Forgot Password?</Link>
      </div>
    )
  }
}

export default loginProcess(CSSModules(Login, css))
