import { Button, Checkbox, Flex, Stack, Textarea } from '@mantine/core'
import { SelectUsers } from '../../../export/select-user-id/select-user-id'
import { modals } from '@mantine/modals'

export const TodosForm = (props) => {
  const { title } = props
  return (
    <form>
      <Stack gap={20}>
        <Textarea label="Todo" placeholder="Введите todo" />
        <SelectUsers label="User id" clearable placeholder="Выберите user" />
        <Checkbox label="Completed" />
      </Stack>

      <Flex justify={'end'} gap={10} mt={20}>
        <Button onClick={() => modals.closeAll()}>Отмена</Button>
        <Button>{title}</Button>
      </Flex>
    </form>
  )
}
