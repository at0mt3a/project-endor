import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class HeaderDefaultLinks extends Component {
  render() {
    return [
      <Link key="login" to="/login">
        <Button basic>Login</Button>
      </Link>,
      <Link key="create-account" to="/create-account">
        <Button basic>Sign Up</Button>
      </Link>
    ]
  }
}

export default HeaderDefaultLinks
