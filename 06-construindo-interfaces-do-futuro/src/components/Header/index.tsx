import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { NotificationNav } from "./NotificationNav";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { Profile } from "./Profile";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          mr="2"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}