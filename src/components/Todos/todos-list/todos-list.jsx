import {
  Button,
  Flex,
  Stack,
  Title,
  Table as TableM,
  Checkbox,
  ActionIcon,
} from '@mantine/core'
import { Table } from '../../../ui/table/table'
import {
  HiArchiveBoxXMark,
  HiMiniPencilSquare,
  HiMiniPlusCircle,
} from 'react-icons/hi2'
import { modals } from '@mantine/modals'
import { TodosCreate } from '../todos-create/todos-create'
import { TodosDelete } from '../todos-delete/todos-delete'
import { TodosEdit } from '../todos-edit/todos-edit'
import { useTodosList } from '../../../hooks/todos/use-todos-list/use-todos-list'
import { useContext } from 'react'
import { AuthCountext } from '../../../context/auth-context'

export const TodosList = () => {
  const { todos } = useTodosList()
  const { user } = useContext(AuthCountext)

  const createFn = () => {
    modals.open({
      children: <TodosCreate />,
      title: 'Create todo',
    })
  }

  const deleteFn = (id) => {
    modals.open({
      children: <TodosDelete id={id} />,
      title: 'Delete todo',
    })
  }

  const editFn = (id) => {
    modals.open({
      children: <TodosEdit id={id} />,
      title: 'Редактировать todo',
    })
  }

  const rows = todos.map((element) => (
    <TableM.Tr key={element.id}>
      <TableM.Td>{element.id}</TableM.Td>
      <TableM.Td>{element.userId}</TableM.Td>
      <TableM.Td>{element.todo}</TableM.Td>
      <TableM.Td>
        <Checkbox readOnly checked={element.completed} />
      </TableM.Td>
      <TableM.Td>
        <ActionIcon p={2} onClick={() => deleteFn(element.id)}>
          <HiArchiveBoxXMark size={30} />
        </ActionIcon>
        <ActionIcon ml={8} p={2} onClick={() => editFn(element.id)}>
          <HiMiniPencilSquare size={30} />
        </ActionIcon>
      </TableM.Td>
    </TableM.Tr>
  ))

  return (
    <Stack gap={12} p={20}>
      <h1>{user?.username}</h1>
      <Flex gap={12} align={'center'}>
        <Button>Back</Button>
        <Title>Todos list</Title>
        <Button
          ml={'auto'}
          rightSection={<HiMiniPlusCircle />}
          onClick={createFn}
        >
          Create todo
        </Button>
      </Flex>

      <Table column={['ID', 'User Id', 'Todo', 'Completed']} rows={rows} />
    </Stack>
  )
}
