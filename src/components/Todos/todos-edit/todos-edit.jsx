import { useEffect } from 'react'
import { TodosForm } from '../todos-form/todos-form'

export const TodosEdit = ({ id }) => {
  const fetchTodo = () => {
    fetch(`https://dummyjson.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  useEffect(() => {
    fetchTodo()
  }, [id])
  return <TodosForm title="Сохранить" />
}
