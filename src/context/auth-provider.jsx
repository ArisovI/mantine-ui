import { useEffect, useState } from 'react'
import { AuthCountext } from './auth-context'
import { api } from '../api/api'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true)
      const { data } = await api('/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      })
      if (data) {
        setIsLoading(false)
        setUser(data)
        return data
      }
    }
    getUser()
  }, [])

  return (
    <AuthCountext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthCountext.Provider>
  )
}
