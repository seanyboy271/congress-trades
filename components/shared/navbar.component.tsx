import { Flex, Link, Center } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export const NavBar = () => {
  return (
    <Center bg={"gray.300"} flex={"0.07"}>
      <Flex
        textAlign={"center"}
        direction={"row"}
        justify={"space-between"}
        flex={"0.5"}
        gap={"5%"}
      >
        <NextLink href="/" passHref>
          <Link>Summary By Day</Link>
        </NextLink>
        <NextLink href="/by_rep" passHref>
          <Link>Summary By Rep</Link>
        </NextLink>
        <NextLink href="/by_ticker" passHref>
          <Link>Summary By Ticker</Link>
        </NextLink>
        <NextLink href="/by_state" passHref>
          <Link>Summary By State</Link>
        </NextLink>
      </Flex>
    </Center>
  );
};
