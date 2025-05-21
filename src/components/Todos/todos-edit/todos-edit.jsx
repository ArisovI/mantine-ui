import { useEffect, useState } from 'react'
import { TodosForm } from '../todos-form/todos-form'
import { api } from '../../../api/api'

export const TodosEdit = ({ id }) => {
  const [data, setData] = useState(null)

  const fetchTodo = async () => {
    const { data } = await api(`todos/${id}`)
    setData(data)
  }

  const fetchEditTodo = async (body) => {
    const { data } = await api.patch(`todos/${id}`, body)
    return data
  }

  useEffect(() => {
    fetchTodo()
  }, [id])

  const editFn = async (values) => {
    await fetchEditTodo(values)
  }

  return (
    <>
      {data !== null && (
        <TodosForm
          title="Сохранить"
          submitFn={editFn}
          initialValues={{
            todo: data.todo,
            completed: data.completed,
            userId: data.userId > 30 ? null : String(data.userId),
          }}
        />
      )}
    </>
  )
}
