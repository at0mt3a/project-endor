import * as axiosWrapper from '../utilities/axios/wrapper'

export const logout = {
  formatUrl: () => `/auth/logout`,
  request: (url) => axiosWrapper.put(url)
}
