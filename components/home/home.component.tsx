import { Container, Flex, List, ListItem } from "@chakra-ui/react";
import PieGraph from "../shared/graphs/pie-chart.component";

export const Home = () => {
  return (
    <Container height="50%">
      <Flex height={"100%"}>
        <List flex={"1"}>
          <ListItem>1</ListItem>
          <ListItem>1</ListItem>
          <ListItem>1</ListItem>
          <ListItem>1</ListItem>
          <ListItem>1</ListItem>
        </List>
        <PieGraph></PieGraph>
      </Flex>
    </Container>
  );
};
