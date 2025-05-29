import { useContext } from 'react'
import { AuthCountext } from '../../context/auth-context'
import { Loader } from '@mantine/core'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthCountext)

  if (isLoading) {
    return <Loader color="blue" size="xl" type="dots" />
  }

  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  return children
}

export default ProtectedRoute
