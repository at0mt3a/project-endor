import localStorage from './local-storage'

const config = {
  authLocalStorageKey: 'project-starter-dev-token'
}

export function isAvailable() {
  return !!localStorage.getItem(config.authLocalStorageKey)
}

export function get() {
  return isAvailable() ? localStorage.getItem(config.authLocalStorageKey) : null
}

export function set(val) {
  return localStorage.setItem(config.authLocalStorageKey, val)
}

export function remove() {
  return localStorage.removeItem(config.authLocalStorageKey)
}

export default { get, set, remove }
