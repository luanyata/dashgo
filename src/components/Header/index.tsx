import { Flex } from "@chakra-ui/react";
import Profile from "./Profile";
import NotificationNav from './NotificationNav'
import Search from "./Search";
import Logo from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <Search />

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile />
      </Flex>
    </Flex>
  );
}
