import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react';

export default function Home() {
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
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              variant="filled"
              size="lg"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              _hover={{
                bgColor: "gray.900"
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              variant="filled"
              size="lg"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              _hover={{
                bgColor: "gray.900"
              }}
            />
          </FormControl>
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
