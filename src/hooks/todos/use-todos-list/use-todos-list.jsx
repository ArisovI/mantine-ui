import { useEffect, useState } from 'react'
import { api } from '../../../api/api'

export const useTodosList = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const { data } = await api('todos')
    setTodos(data.todos)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return { todos }
}
