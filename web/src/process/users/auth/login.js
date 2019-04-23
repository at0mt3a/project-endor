import React from 'react'

import * as actions from './actions'
import connected from '../../../state/connect'
import autoLogin from './auto-login'

const loginProcess = WrappedComponent => {
  class Login extends React.Component {
    handleClick = (email, password) => {
      this.props.userAuthActions.fetch(email, password)
    }

    render() {
      return <WrappedComponent loginProcess={this.handleClick} {...this.props} />
    }
  }

  return connected([], [actions])(autoLogin(Login))
}

export default loginProcess
