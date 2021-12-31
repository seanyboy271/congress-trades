import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { loadHouseData } from "../../state/house/house.actions";
import { loadSenateData } from "../../state/senate/senate.actions";

export const ErrorModal = () => {
  const { isOpen, onOpen } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    onOpen();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [state]);

  const refreshData = () => {
    setLoading(true);
    if (state.senate.error) dispatch(loadSenateData());
    if (state.house.error) dispatch(loadHouseData());
  };

  const refreshPage = () => {
    router.reload();
  };

  return (
    <Modal isOpen={isOpen} onClose={refreshPage}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Oh No!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            There was an error loading some data. Hit close to refresh the page,
            or hit the
            <strong> Try Again</strong> button to attempt to reload the data.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={refreshPage}>
            Close
          </Button>
          <Button variant="ghost" onClick={refreshData}>
            {loading && <Spinner></Spinner>}
            Try Again
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
