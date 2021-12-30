import { Flex, Link, Center, Container } from "@chakra-ui/react";
import React from "react";

export const NavBar = () => {
  return (
    <Center height="3.5rem">
      <Flex direction={"row"} justify={"space-between"} flex={"0.5"}>
        <Link> Test link 1</Link>
        <Link> Test link 2</Link>
        <Link> Test link 3</Link>
        <Link> Test link 4</Link>
      </Flex>
    </Center>
  );
};
