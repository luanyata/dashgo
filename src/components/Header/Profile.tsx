import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luan Lima</Text>
        <Text color="gray.300" fontSize="small">luan@yata.dev</Text>
      </Box>
      <Avatar size="md" name="Luan Lima" src="https://github.com/luanyata.png" />
    </Flex>
  )
}
