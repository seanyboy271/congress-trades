import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../state";
import { Box, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { RouteGuard } from "../components/shared/utils/route.guard";
import { NavBar } from "../components/shared/navbar.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouteGuard></RouteGuard>
        <Flex direction={"column"} height={"100vh"}>
          <NavBar></NavBar>
          <Container
            flex={"1"}
            maxW={"100vw"}
            bg={"green.100"}
            margin={"0 0 0 0"}
            padding={"2% 0 0 5%"}
          >
            <Component {...pageProps} />
          </Container>
        </Flex>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
