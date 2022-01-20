import { Flex, useBreakpointValue, Icon, IconButton } from "@chakra-ui/react";
import Profile from "./Profile";
import NotificationNav from './NotificationNav'
import Search from "./Search";
import Logo from "./Logo";
import { useSidebarDrawer } from "../../hooks/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";
import { useEffect } from "react";

export function Header() {

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({ base: false, lg: true })


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

      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24" variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <Search />}


      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
