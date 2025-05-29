import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/home'
import TodosListPage from '../pages/Todos/todos-list'
import { ROUTES } from '../constants/routes'
import Login from '../pages/Login/login'
import ProtectedRoute from '../components/ProtectedRoute/protected-route'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.TODOS,
    element: (
      <ProtectedRoute>
        <TodosListPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.LOGIN,
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
])
