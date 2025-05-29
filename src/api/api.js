import axios from 'axios'
import { refreshToken } from '../utils/refresh-token'

const BASE_URL = 'https://dummyjson.com/'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem('token')

    if (access) {
      config.headers.Authorization = `Bearer ${access}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    if (error.status === 401) {
      const token = localStorage.getItem('refresh-token')
      refreshToken(token)
    }
  },
)
