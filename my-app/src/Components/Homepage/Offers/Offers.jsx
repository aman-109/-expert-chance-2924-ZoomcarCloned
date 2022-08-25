import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

export const Offers = () => {
  return (
    <Box>
      <Box  w='70%' m='auto'>
        <Box fontWeight='bold' mb={2}>OFFERS</Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem bg="blue.500" >
            <Image src='https://zoomcar-assets.zoomcar.com/photos/original/0d948091d1befad4507bd5710ad03a309f5b5345.jpg?1651837793' w='100%'/>
          </GridItem>
          <GridItem bg="blue.500">
            <Image src="https://zoomcar-assets.zoomcar.com/photos/original/04c58c8d2c2e42ae1da4a8821643f43f8d2629e4.jpg?1646817336"/>
          </GridItem>
          <GridItem bg="blue.500">
            <Image src="https://zoomcar-assets.zoomcar.com/photos/original/67aa017f464b45e52f7bc9a206245e5f15f5a316.jpg?1655478529" h='100%'/>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};