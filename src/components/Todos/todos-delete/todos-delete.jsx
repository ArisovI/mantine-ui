import { Button, Flex, Stack, Title } from '@mantine/core'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'

export const TodosDelete = ({ id }) => {
  const deleteTodo = () => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! 🌟',
        })
        modals.closeAll()
      })
  }

  return (
    <Stack gap={20}>
      <Title order={4}>Вы уверены что хотите удалить Todo?</Title>
      <Flex justify={'end'} gap={10}>
        <Button>Отмена</Button>
        <Button onClick={deleteTodo}>Удалить</Button>
      </Flex>
    </Stack>
  )
}
