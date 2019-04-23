import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from '../types'
import LocalStorage from '../../../utilities/local-storage/token'

export const name = 'userAuthActions'

export function fetch(email, password) {
  return {
    type: TYPES.FETCH_USER_TOKEN_REQUEST,
    email,
    password,
  }
}

export function* executeFetchToken({ email, password }) {
  const url = api.fetch.formatUrl()
  const body = api.fetch.serialize(email, password)
  try {
    const res = yield call(api.fetch.request, url, body)
    LocalStorage.set(res.data.token)
    yield put(fetchSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess(data) {
  return {
    type: TYPES.FETCH_USER_TOKEN_SUCCESS,
    user: data.user,
    admin: data.admin
  }
}

export function fetchUserByJWT() {
  return {
    type: TYPES.FETCH_USER_BY_JWT
  }
}

export function* executeFetchUserByJWT() {
  const url = api.fetchByJWT.formatUrl()
  try {
    const res = yield call(api.fetchByJWT.request, url)
    console.log('Res', res)
    yield put(fetchSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function recover(email) {
  return {
    type: TYPES.RECOVER_USER_PASSWORD_REQUEST,
    email
  }
}

export function* executeRecover({ email }) {
  const url = api.recover.formatUrl()
  const body = api.recover.serialize(email)
  try {
    yield call(api.recover.request, url, body)
    yield put(recoverSuccess())
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
    // TODO add the IP address to a logger and set up something for multiple attempts DOS attack
    yield put(recoverSuccess())
  }
}

export function recoverSuccess() {
  return {
    type: TYPES.RECOVER_USER_PASSWORD_SUCCESS
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_USER_TOKEN_REQUEST, executeFetchToken),
  takeLatest(TYPES.RECOVER_USER_PASSWORD_REQUEST, executeRecover),
  takeLatest(TYPES.FETCH_USER_BY_JWT, executeFetchUserByJWT)
]

export default sagas
