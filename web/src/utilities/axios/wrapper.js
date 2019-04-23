import axios from 'axios'
import authToken from '../local-storage/token'

import formatUrl from './format-url'

export function getHeaders() {
  const headers = {
    'Content-Type': 'application/vnd.api+json'
  }

  const token = authToken.get()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return headers
}

export function get(url) {
  return axios({
    method: 'get',
    url: formatUrl(url),
    headers: getHeaders()
  })
}

export function put(url, data) {
  return axios({
    method: 'put',
    url: formatUrl(url),
    headers: getHeaders(),
    data
  })
}

export function post(url, data) {
  return axios({
    method: 'post',
    url: formatUrl(url),
    headers: getHeaders(),
    data
  })
}

export function del(url, data) {
  return axios({
    method: 'delete',
    url: formatUrl(url),
    headers: getHeaders(),
    data
  })
}
