import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/home'
import TodosListPage from '../pages/Todos/todos-list'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todos',
    element: <TodosListPage />,
  },
])
