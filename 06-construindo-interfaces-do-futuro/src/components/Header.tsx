import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
      mx="auto"
      mt="4"
      px="6"
      w="100%"
      maxWidth={1480}
      h="20"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

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

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="28" />
          <Icon as={RiUserLine} fontSize="28" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Rafael Martins</Text>
            <Text color="gray.300" fontSize="small">
              rafaeldcmartins@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Rafael Martins"
            src="https://github.com/martins-rafael.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}