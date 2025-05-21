import { api } from '../../../api/api'
import { TodosForm } from '../todos-form/todos-form'
export const TodosCreate = () => {
  const fetchCreateTodo = async (body) => {
    const { data } = await api.post('todos/addssss', body)
    return data
  }

  const createFn = async (body) => {
    await fetchCreateTodo(body)
  }

  return <TodosForm title="Добавить" submitFn={createFn} />
}
