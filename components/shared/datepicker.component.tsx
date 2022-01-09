import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const DatePicker = ({ isOpen, onClose, onSubmit }: any) => {
  const [chosenDate, setChosenDate] = useState<Date>(new Date());
  const dates = Array.from(Array(30));
  const [bgs, setbgs] = useState<string[]>(Array(dates.length).fill("white"));
  const onClick = (date: number) => {
    let bgscopy = Array(dates.length).fill("white");
    bgscopy[date - 1] = "orange";
    setbgs(bgscopy);
    setChosenDate(new Date(date));
  };
  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Enter") {
      onClick(index + 1);
    }
  };

  const submit = () => {
    onSubmit(new Date(chosenDate));
    onClose();
  };

  return (
    <Modal id="daily_summary_datepicker" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Center>Current Date: {chosenDate?.toLocaleDateString()}</Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>;alskfjdaskfdjaslfd</Text>
          <Container width="80%">
            <Grid
              gap={"1"}
              templateColumns="repeat(6, 1fr)"
              templateRows={"repeat(5, auto)"}
            >
              {dates.map((elem, index) => (
                <GridItem>
                  <Box
                    tabIndex={index}
                    cursor={"pointer"}
                    borderRadius={"3px"}
                    bg={bgs[index]}
                    id={"gridSquare" + (index + 1)}
                    borderWidth={1}
                    onClick={(e) => onClick(index + 1)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    _hover={{
                      background: "orange",
                      color: "teal.500",
                    }}
                  >
                    <Center height={"100%"}>{index + 1}</Center>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Center width="100%">
            <Button onClick={submit} tabIndex={dates.length + 1}>
              Select Date
            </Button>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
