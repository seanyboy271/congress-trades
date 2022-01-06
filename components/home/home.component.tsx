import {
  Box,
  Grid,
  GridItem,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { getPieChartData } from "../../state/utils";
import PieGraph from "../shared/graphs/pie-chart.component";
import { ShadowBox } from "../shared/shadow-bow.component";

export const Home = () => {
  const state = useSelector((state: RootState) => state);
  return (
    <Box height="100%">
      <Grid
        templateRows="repeat(1,1fr)"
        templateColumns="repeat(10,1fr)"
        gap={6}
        h="100%"
      >
        <GridItem h="50%" colSpan={3}>
          <ShadowBox>
            <Text fontSize={"xl"}>Senators who made trades today</Text>
            <OrderedList padding={"0 0 0 2%"}>
              <ListItem>1</ListItem>
              <ListItem>2</ListItem>
              <ListItem>3</ListItem>
              <ListItem>4</ListItem>
              <ListItem>5</ListItem>
              <ListItem>6</ListItem>
              <ListItem>7</ListItem>
              <ListItem>8</ListItem>
              <ListItem>9</ListItem>
              <ListItem>10</ListItem>
            </OrderedList>
          </ShadowBox>
        </GridItem>
        <GridItem h="50%" colSpan={6}>
          <ShadowBox>
            <PieGraph data={getPieChartData(state).slice(0, 10)}></PieGraph>
          </ShadowBox>
        </GridItem>
      </Grid>
    </Box>
  );
};
