import { useContext } from "react";
import { AuthContext } from "../../Context/AppContext";
import { Box, Flex, Image, Button, Input } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function CarPage() {
  const { carData } = useContext(AuthContext);
  const navigate =useNavigate()
  // const {a
  const params = useParams();
  // console.log(params.city)
  // console.log(carData);
  const handleBook = () => {
    alert("Booking Confirmed !");
  navigate("/")
  };

  return (
    <>
      <Box>
        <Navbar />
      </Box>

      <Box>
        <Box w="58%" m={"auto"} mt={"90px"}>
          <Flex justifyContent="space-between">
            <Button
              onClick={() => navigate("/searchLocation")}
              bg="white"
              w={"50%"}
              border="1px solid green"
              mb={2}
              textTransform="uppercase"
            >
              {/* {address || cookies.Address}
               */}
              {params.city}
            </Button>
            {/* <Button
            w={"45%"}
            onClick={() => navigate("/DateAndTime")}
            mb={2}
            bg="white"
            border={"1px solid green"}
          >
            {DateTime.sDateAndTime || cookies.startDT}
            <BsArrowRight style={{ marginLeft: "20px", marginRight: "20px" }} />
            {DateTime.rDateAndTime || cookies.returnDT}
            "date"
          </Button> */}
          </Flex>
        </Box>
        <Box w="60%" m="auto" p={3}>
          {carData.map((e) => {
            return (
            <Box mb={3} key={e.id}>
              <Flex
                justifyContent="space-between"
                border="1px solid black"
                p={3}
              >
                <Box w="60%" p={4}>
                  <Box fontSize="large" fontWeight="bold">
                    {e.car_data.name}
                  </Box>
                  <Box>{`${e.car_data.accessories[0]}.${e.car_data.accessories[1]}.${e.car_data.accessories[2]}`}</Box>
                  <Flex>
                    <Box mr={2} mt={1}>
                      <AiFillStar />
                    </Box>
                    {/* <Box>{e.car_data.rating.text}</Box> */}
                  </Flex>
                  <Box color="green" fontWeight="bold">
                    {e.car_data.pricing.payable_amount}
                  </Box>
                  <Box mt={10}>
                    <Button bg="green" color="white" onClick={handleBook}>
                      Book Now
                    </Button>
                  </Box>
                </Box>
                <Box w="40%">
                  <Image style={{ width: "95%" }} src={e.car_data.url} />
                </Box>
              </Flex>
            </Box>)
          })}
        </Box>
      </Box>
    </>
  );
}
