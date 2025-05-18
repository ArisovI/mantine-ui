import { useEffect, useState } from 'react'

export const useTodosList = () => {
  const [todos, setTodos] = useState([])
  const fetchTodos = () => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return { todos }
}
