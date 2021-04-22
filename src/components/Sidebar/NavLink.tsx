import Link from "next/link";
import { Link as ChakraLink, Icon, Text, LinkProps as ChakarLinkProps } from "@chakra-ui/react";
import React, { ElementType } from "react";



interface NavLinkProps extends ChakarLinkProps {
  icon: ElementType;
  children: string;
  href: string
}

export default function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}

