import React from 'react'
import jwt from 'jsonwebtoken'

import * as actions from './actions'
import connected from '../../../state/connect'
import { selector as user } from '../reducer'
import authToken from '../../../utilities/local-storage/token'

const JwtProcess = WrappedComponent => {
  class JWTVerify extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fetching: false
      }
    }
    componentWillMount() {
      const token = authToken.get()
      const { active } = this.props.user

      if (token && !active) {
        const decoded = jwt.decode(token)
        const currentTime = (new Date().getTime()) / 1000
        if (decoded.exp < currentTime) {
          authToken.remove()
        } else {
          this.setState({ fetching: true }, () => {
            this.props.userAuthActions.fetchUserByJWT()
          })
        }
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.user && nextProps.user.active) {
        this.setState({ fetching: false })
      }
    }

    render() {
      if (this.state.fetching) return null
      return <WrappedComponent {...this.props} />
    }
  }

  return connected([user], [actions])(JWTVerify)
}

export default JwtProcess
