import React from 'react'
import { Redirect } from 'react-router-dom'

import * as logoutActions from '../../../state/actions'
import connected from '../../../state/connect'
import { selector as user } from '../../../process/users/reducer'

class SignOut extends React.Component {
  componentDidMount() {
    this.props.logoutActions.logoutUser()
  }

  render() {
    const user = this.props.user.active

    if(!user || typeof user.userHandle === 'undefined')
      return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />

    return null
  }
}

export default connected([user], [logoutActions])(SignOut)