import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luan Lima</Text>
          <Text color="gray.300" fontSize="small">luan@yata.dev</Text>
        </Box>
      )}

      <Avatar size="md" name="Luan Lima" src="https://github.com/luanyata.png" />
    </Flex>
  )
}
