import typesCreator from '../../state/types-creator'

export default typesCreator('user',
  'FETCH_USER_INFO_REQUEST',
  'FETCH_USER_TOKEN_REQUEST',
  'FETCH_USER_TOKEN_SUCCESS',
  'FETCH_USER_BY_JWT',
  'RECOVER_USER_PASSWORD_REQUEST',
  'RECOVER_USER_PASSWORD_SUCCESS'
)
