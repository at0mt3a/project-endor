import TYPES from './types'

export const initialState = {
  active: null,
  recover: false,
  admin: false
}

const loginUser = (state, { admin, user }) => ({
  ...state,
  active: user,
  admin
})

const recoverPassword = (state, action) => ({
  ...state,
  recover: true
})

const handlers = {
  [TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser,
  [TYPES.RECOVER_USER_PASSWORD_SUCCESS]: recoverPassword
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'user',
  select(state) {
    return state.user
  }
}
