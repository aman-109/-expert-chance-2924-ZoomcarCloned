import { useContext } from "react"
import { AuthContext } from "../../Context/AppContext"
import { Box, Flex, Image, Button, Input } from "@chakra-ui/react"
import Navbar from "../Navbar/Navbar"

export default function CarPage(){
    const {carData}=useContext(AuthContext)

    // console.log(carData);

    return (
        <>
        <Box>
          <Navbar/>
        </Box>

         <Box>
      <Box w="58%" m={"auto"} mt={"10px"}>
        <Flex justifyContent="space-between">
          <Button
            onClick={() => navigate("/searchLocation")}
            bg="white"
            w={"50%"}
            border="1px solid green"
            mb={2}
          >
            {/* {address || cookies.Address}
             */}
             "city"
          </Button>
          <Button
            w={"45%"}
            onClick={() => navigate("/DateAndTime")}
            mb={2}
            bg="white"
            border={"1px solid green"}
          >
            {/* {DateTime.sDateAndTime || cookies.startDT}
            <BsArrowRight style={{ marginLeft: "20px", marginRight: "20px" }} />
            {DateTime.rDateAndTime || cookies.returnDT} */}
            "date"
          </Button>
        </Flex>
      </Box>
      <Box w="60%" m="auto" p={3}>
        {/* {Object.keys(data).map((elem) => {
          if (elem == cookies.City) {
            return data[elem].map((e) => (
              <Box mb={3} key={e.id}>
                <Flex
                  justifyContent="space-between"
                  border="1px solid black"
                  p={3}
                >
                  <Box w="60%" p={4}>
                    <Box fontSize="large" fontWeight="bold">
                      {e.name}
                    </Box>
                    <Box>{e.type}</Box>
                    <Flex>
                      <Box mr={2} mt={1}>
                        <AiFillStar />
                      </Box>
                      <Box>{e.rating}</Box>
                    </Flex>
                    <Box color="green" fontWeight="bold">
                      {e.price}
                    </Box>
                    <Box mt={10}>
                      <Button bg="green" color="white" onClick={handleBook}>
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                  <Box w="40%">
                    <Image style={{ width: "95%" }} src={e.image} />
                  </Box>
                </Flex>
              </Box>
            ));
          }
        })} */}
      </Box>
    </Box>
        </>
    )
}