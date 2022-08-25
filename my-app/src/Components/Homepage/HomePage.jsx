import {
  Button,
  FormControl,
  Box,
  Image,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { VscArrowSwap } from "react-icons/vsc";
import { RiFlightTakeoffLine } from "react-icons/Ri";
import { useNavigate } from "react-router-dom";
import { Offers } from "./Offers/Offers";
import { Promo } from "./Promo/Promo";
import ReferAndEarn from "./ReferAndEarn/ReferAndEarn";
import { useState } from "react";

export default function Homepage() {
  const navigate = useNavigate();
  const [isAirportClick, setIsAirportClick] = useState(false);
  return (
    <>
      <div
        style={{
        //   border: "1px solid red",
          width: "100%",
          marginTop: "75px",
        }}
      >
        <Box>
          <Box style={{ position: "relative" }}>
            <Box>
              <Image
                src={
                  !isAirportClick
                    ? "https://www.zoomcar.com/img/banner_roundtrip.png"
                    : "https://www.zoomcar.com/img/banner_airport.png"
                }
                w={"100%"}
                h="610px"
              />
            </Box>
            <FormControl
              //   border={"1px solid white"}
              w={"30%"}
              position={"absolute"}
              top="60%"
              left={"35%"}
              textAlign={"center"}
            >
              <Box
                justifyContent={"center"}
                //   onClick={() => navigate("/CityAndCountry")}
              >
                {/* <Box textAlign="left" fontSize="larger" mb={"5px"} mr={"5px"}>
                  Round Trip
                </Box>
                <FcExpand style={{ marginTop: "8px" }} /> */}
                <Tabs isFitted variant="enclosed">
                  <TabList>
                    <Tab
                      onClick={() => setIsAirportClick(false)}
                      gap={"0.5rem"}
                      bg={"#f5f5f5"}
                      _selected={{
                        color: "green",
                        border: "1px solid green",
                        bg: "white",
                      }}
                    >
                      <VscArrowSwap />
                      <Text size={"xs"}>Round Trip</Text>
                    </Tab>
                    <Tab
                      onClick={() => setIsAirportClick(!isAirportClick)}
                      gap={"0.5rem"}
                      bg={"#f5f5f5"}
                      _selected={{
                        color: "green",
                        border: "1px solid green",
                        bg: "white",
                      }}
                    >
                      <RiFlightTakeoffLine />
                      <Text size={"xs"}>Airport Round Trip</Text>
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Button
                        //   onClick={checkLogin}
                        bg="white"
                        w={"100%"}
                        border="1px solid grey"
                        mb={2}
                      >
                        {"Pick Up City, Airport, Address or Hotel"}
                      </Button>
                      {/* <Button
                        //   onClick={checkLogin}
                        bg="white"
                        w={"100%"}
                        border="1px solid grey"
                        mb={2}
                      >
                        {"Pick Up City, Airport, Address or Hotel"}
                      </Button> */}
                    </TabPanel>
                    <TabPanel>
                      <Button
                        //   onClick={checkLogin}
                        bg="white"
                        w={"100%"}
                        border="1px solid grey"
                        mb={2}
                      >
                        {"Pick Up City, Airport, Address or Hotel"}
                      </Button>

                      <Button
                        w={"100%"}
                        bg="white"
                        // onClick={() => navigate("/DateAndTime")}
                        mb={2}
                        border={"1px solid grey"}
                        // disabled={address == "" || cookies.Address == undefined}
                      >
                        {"Choose Trip Dates"}
                      </Button>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>

              <Button
                bg="#34ec53"
                w={"95%"}
                onClick={() => navigate("/carsPage")}
                style={{ color: "white" }}
                //   disabled={
                //     DateTime.sDateAndTime == "" || cookies.startDT == undefined && address == "" || cookies.Address == undefined
                //   }
              >
                FIND CARS
              </Button>
            </FormControl>
          </Box>
          <br />
          <br />
          <ReferAndEarn />
          <Promo />
          <br />
          <Offers />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </div>
    </>
  );
}
