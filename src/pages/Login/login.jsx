import {
  Button,
  Flex,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'
import { api } from '../../api/api'
import { notifications } from '@mantine/notifications'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: isNotEmpty('Пожалуйста, заполните поле'),
      password: isNotEmpty('Пожалуйста, заполните поле'),
    },
  })

  const login = async (body) => {
    const { data } = await api.post('auth/login', body, {
      credentials: 'include',
    })

    if (data) {
      console.log(data)
      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('refresh-token', data.refreshToken)
    }
  }

  const handleSubmit = async (values) => {
    setIsLoading(true)
    try {
      await login({ ...values, expiresInMins: 30 }).then(() => {
        setIsLoading(false), navigate('/todos', { viewTransition: true })
      })
    } catch {
      setIsLoading(false)
      notifications.show({
        title: 'Default notification',
        message: 'Do not forget to star Mantine on GitHub! 🌟',
        color: 'red',
      })
    }
  }

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack
        w={300}
        gap={10}
        justify="center"
        align="center"
        m={'0 auto'}
        bg="#cddae7"
        АА
        p={20}
        style={{ borderRadius: 4 }}
      >
        <Title order={2}>Login</Title>
        <TextInput
          w={'100%'}
          label="Username"
          placeholder="Введите username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          w={'100%'}
          label="Password"
          placeholder="Введите password"
          {...form.getInputProps('password')}
        />
        <Flex w={'100%'} gap={20}>
          <Button type="reset" variant="light" w={'50%'}>
            Reset
          </Button>
          <Button type="submit" w={'50%'} loading={isLoading}>
            Login
          </Button>
        </Flex>
      </Stack>
    </form>
  )
}

export default Login
