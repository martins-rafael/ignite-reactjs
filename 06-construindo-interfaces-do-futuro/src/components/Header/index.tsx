import { Flex } from "@chakra-ui/react";

import { NotificationNav } from "./NotificationNav";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { Profile } from "./Profile";

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
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}