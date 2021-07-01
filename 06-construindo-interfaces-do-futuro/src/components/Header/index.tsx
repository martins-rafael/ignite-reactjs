import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { NotificationNav } from "./NotificationNav";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { Profile } from "./Profile";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

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

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}