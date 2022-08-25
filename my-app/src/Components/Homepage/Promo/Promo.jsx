import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

export const Promo = () => {
  return (
    <Box  bg='rgb(244,244,244)' p={5}>
      <Box w="70%" m="auto">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem >
            <a>
              <Image src="https://zoomcar-assets.zoomcar.com/pictures/original/d70e7f58da384df0f3ba169cf19e8e931879c66c.jpeg?1652354515" borderRadius='10px' />
            </a>
          </GridItem>
          <GridItem >
            <a>
              <Image src="https://zoomcar-assets.zoomcar.com/pictures/original/e3dfe0ed91abc29facaf56a327b4498ce4e9b75e.jpeg?1652363808" borderRadius='10px'/>
            </a>
          </GridItem>
          <GridItem >
            <a>
              <Image src="https://zoomcar-assets.zoomcar.com/pictures/original/e3dfe0ed91abc29facaf56a327b4498ce4e9b75e.jpeg?1652363808" borderRadius='10px' w='100%'/>
            </a>
          </GridItem>
          <GridItem >
            <a>
              <Image src="https://zoomcar-assets.zoomcar.com/pictures/original/55c3970a33c8f4d10dd3c9ace39d20e32af5c8ba.jpg?1651758755" borderRadius='10px' h='100%'/>
            </a>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};