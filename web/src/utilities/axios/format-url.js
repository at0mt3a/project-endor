// import config from '../../config'

const CANONICAL_URL_REGEX = /^[^:]+:\/\//

export function isCanonicalUrl(url) {
  return CANONICAL_URL_REGEX.test(url)
}

// TODO change the string for localhost to depend on the config.apiHost
export default function formatUrl(url) {
  const host = isCanonicalUrl(url) ? '' : 'http://localhost:9001/api'
  return `${host}${url}`
}
