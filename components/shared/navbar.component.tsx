import { Flex, Link, Center, Container } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export const NavBar = () => {
  return (
    <Center height="3.5rem">
      <Flex direction={"row"} justify={"space-between"} flex={"0.5"}>
        <NextLink href="/by_day" passHref>
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
