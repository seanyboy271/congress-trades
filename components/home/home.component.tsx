import { CalendarIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  ListItem,
  OrderedList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CongressData, isHouseEntry, SenateEntry } from "../../models/data";
import { RootState } from "../../state";
import { getMemberNamesByDate, getPieChartDataByDate } from "../../state/utils";
import { DatePicker } from "../shared/datepicker.component";
import PieGraph from "../shared/graphs/pie-chart.component";
import { ShadowBox } from "../shared/shadow-bow.component";

export const Home = () => {
  const state = useSelector((state: RootState) => state);
  const datepicker = useDisclosure({ id: "daily_summary_datepicker" });
  const [currDate, setCurrDate] = useState<Date>(new Date());
  const [members, setMembers] = useState<CongressData[]>();
  const onSubmit = (currentDate: Date) => {
    setCurrDate(currentDate);
  };

  useEffect(() => {
    if (state.senate.data && state.house.data) {
      console.log(
        "senators",
        getMemberNamesByDate(
          Array<CongressData>()
            .concat(state.senate.data)
            .concat(state.house.data),
          currDate
        )
      );

      setMembers(
        getMemberNamesByDate(
          Array<CongressData>()
            .concat(state.senate.data)
            .concat(state.house.data),
          currDate
        )
      );
    }
  }, [state, currDate]);

  return (
    <>
      <Flex gap={6} direction={"column"} height="100%">
        <Flex>
          <Heading>Daily Summary for {currDate.toLocaleDateString()} </Heading>
          <IconButton
            onClick={datepicker.onOpen}
            aria-label="Search database"
            icon={<CalendarIcon />}
            bg={"transparent"}
          />
        </Flex>
        <Grid
          templateRows="repeat(1,1fr)"
          templateColumns="repeat(10,1fr)"
          gap={6}
          h="100%"
        >
          <GridItem h="50%" colSpan={3}>
            <ShadowBox>
              <Text fontSize={"xl"}>
                Members of congress who made trades today
              </Text>
              <OrderedList padding={"0 0 0 2%"}>
                {members?.map((elem) => {
                  return isHouseEntry(elem) ? (
                    <ListItem>
                      {elem.representative} - House of Representatives
                    </ListItem>
                  ) : (
                    <ListItem>{elem.senator} - Senator</ListItem>
                  );
                })}
              </OrderedList>
            </ShadowBox>
          </GridItem>
          <GridItem h="50%" colSpan={6}>
            <ShadowBox>
              <PieGraph
                data={
                  state.senate.data && state.house.data
                    ? getPieChartDataByDate(
                        Array<CongressData>()
                          .concat(state.senate.data)
                          .concat(state.house.data),
                        currDate
                      )
                    : []
                }
              ></PieGraph>
            </ShadowBox>
          </GridItem>
        </Grid>
      </Flex>
      <DatePicker
        isOpen={datepicker.isOpen}
        onClose={datepicker.onClose}
        onSubmit={onSubmit}
      ></DatePicker>
    </>
  );
};
