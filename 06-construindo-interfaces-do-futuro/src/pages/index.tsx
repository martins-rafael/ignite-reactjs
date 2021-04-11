import { Flex, Button, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
    >
      <Flex
        as="form"
        flexDir="column"
        p="8"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
