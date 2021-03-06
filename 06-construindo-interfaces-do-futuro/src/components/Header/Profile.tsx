import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rafael Martins</Text>
          <Text color="gray.300" fontSize="small">
            rafaeldcmartins@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rafael Martins"
        src="https://github.com/martins-rafael.png"
      />
    </Flex>
  );
}