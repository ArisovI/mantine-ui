import { api } from '../api/api'

export const refreshToken = async (body) => {
  const { data } = api.post('/auth/refresh', body, {
    credentials: 'included',
  })

  if (data) {
    localStorage.setItem('token', data.accessToken)
  }
  return data.accessToken
}
