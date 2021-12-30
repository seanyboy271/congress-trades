import { Center, Container, Flex, Spinner, Text } from "@chakra-ui/react";

export const LoadingScreen = () => {
  return (
    <Center width={"100vw"} height={"100vh"}>
      <Flex direction={"column"} rowGap={"1rem"}>
        <Text> Loading data ... </Text>
        <Spinner
          width={"100px"}
          height={"100px"}
          thickness="5px"
          speed="1s"
          emptyColor="gray.400"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </Center>
  );
};
