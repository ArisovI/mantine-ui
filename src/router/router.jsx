import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/home'
import TodosListPage from '../pages/Todos/todos-list'
import { ROUTES } from '../constants/routes'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.TODOS,
    element: <TodosListPage />,
  },
])
