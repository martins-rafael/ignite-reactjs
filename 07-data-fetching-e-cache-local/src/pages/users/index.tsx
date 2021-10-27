import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  Text,
  useBreakpointValue,
  Spinner
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useUsers } from '../../services/hooks/useUsers';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex my="6" mx="auto" px="6" w="100%" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" p="8" bg="gray.800" borderRadius={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha no carregamento, tente novamente</Text>
            </Flex>
          )
            : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} width="8" color="gray.300">
                        <Checkbox colorScheme="pink" />
                      </Th>

                      <Th>Usuários</Th>

                      {isWideVersion && <Th>Data de Cadastro</Th>}

                      <Th width="8"></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data.map(user => (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>

                        {isWideVersion && <Td>{user.createdAt}</Td>}

                        {isWideVersion && (
                          <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="pink"
                              leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                            >
                              Editar
                            </Button>
                          </Td>
                        )}
                      </Tr>
                    ))}
                  </Tbody>
                </Table >

                <Pagination
                  totalCountOfRegisters={200}
                  currentPage={5}
                  onPageChange={() => {}}
                />
              </>
            )
          }
        </Box >
      </Flex >
    </Box >
  );
}