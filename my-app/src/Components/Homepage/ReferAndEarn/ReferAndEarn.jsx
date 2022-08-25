import React from "react";
import Discount from "./Discount";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Flex,
  Heading,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import Reffer from "./Refer";

export default function ReferAndEarn() {
  return (
    <>
      <Box w="70%" m="auto" mt="10px" mb="50px">
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem
            w="90%"
            ml="25px"
            border="1px solid rgb(216 216 216)"
            boxShadow={"1px 2px rgb(216 216 216)"}
            borderRadius="5px"
          >
            <Reffer />
          </GridItem>
          <GridItem
            w="90%"
            h="250"
            ml="20px"
            border="1px solid rgb(216 216 216)"
            boxShadow={"1px 2px rgb(216 216 216)"}
            borderRadius="5px"
          >
            <Discount />
          </GridItem>
        </Grid>
      </Box>
      <br />
      <br />
    </>
  );
}
