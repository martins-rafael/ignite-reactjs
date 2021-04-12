import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodFill
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" mr="8" w="64">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" fontSize="small" color="gray.400">
            GERAL
          </Text>

          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="small" color="gray.400">
            AUTOMAÇÃO
          </Text>

          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodFill} fontSize="20" />
              <Text ml="4" fontWeight="medium">Formulários</Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}