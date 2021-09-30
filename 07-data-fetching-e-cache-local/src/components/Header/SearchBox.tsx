import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      position="relative"
      flex="1"
      align="center"
      alignSelf="center"
      ml="6"
      py="4"
      px="8"
      maxWidth={480}
      color="gray.200"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        variant="unstyled"
        mr="4"
        px="4"
        color="gray.50"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray-400" }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}