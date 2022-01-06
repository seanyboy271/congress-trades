import {
  AddIcon,
  CalendarIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  filter,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SenateEntry } from "../../models/data";
import { RootState } from "../../state";
import {
  filterByDate,
  getNamesByDate,
  getPieChartData,
  getPieChartDataByDate,
} from "../../state/utils";
import { DatePicker } from "../shared/datepicker.component";
import PieGraph from "../shared/graphs/pie-chart.component";
import { ShadowBox } from "../shared/shadow-bow.component";

export const Home = () => {
  const state = useSelector((state: RootState) => state);
  const datepicker = useDisclosure({ id: "daily_summary_datepicker" });
  const [currDate, setCurrDate] = useState<Date>(new Date());
  const [senators, setSenators] = useState<SenateEntry[]>();
  const onSubmit = (currentDate: Date) => {
    setCurrDate(currentDate);
  };

  useEffect(() => {
    console.log("senators", getNamesByDate(state, currDate));
    setSenators(getNamesByDate(state, currDate));
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
              <Text fontSize={"xl"}>Senators who made trades today</Text>
              <OrderedList padding={"0 0 0 2%"}>
                {senators?.map((elem) => {
                  return <ListItem>{elem.senator}</ListItem>;
                })}
              </OrderedList>
            </ShadowBox>
          </GridItem>
          <GridItem h="50%" colSpan={6}>
            <ShadowBox>
              <PieGraph
                data={getPieChartDataByDate(state, currDate)}
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
