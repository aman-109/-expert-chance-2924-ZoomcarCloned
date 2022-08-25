import { Grid, GridItem, Box, Image, Flex, Heading, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,Text} from "@chakra-ui/react";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"


export default function Reffer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div onClick={onOpen}>
        <a>
          <Flex  borderBottom='1px solid rgb(216 216 216)'>
            <Box p="15px" w={"65%"}>
              <Box fontSize="lg" fontWeight="bold" mb={5}>
                Your BFF heading for a vacay?
              </Box>

              <Box w={"80%"} fontSize="sm">
              You earn 500 in Z-Points. Your friend gets 20% off on first booking
              (Max upto Rs 2500)
              </Box>
            </Box>
            <Box w={"35%"}>
                <Image
                src="https://www.zoomcar.com/img/people.jpg"
                h={196}
                w={"100%"}
                borderRadius="5px"
              />
            </Box>
          </Flex>
          <Box>
            <Flex pl={10} pt={5} pb={2}>
              <HiOutlineArrowNarrowRight  />
              <Box fontSize='md' fontWeight='bold' ml={5}>
                Refer and Earn
              </Box>
            </Flex>
          </Box>
        </a>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontWeight={"bold"}>REFER FRIENDS</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box style={{fontSize : "sm", fontWeight : "bold"}}>
                Awaiting documents approval
              </Box>
              <Box style={{marginTop : "8%"}}>
              Your documents should be approved before you can share referral code.
              </Box>           
            </ModalBody>
            <ModalFooter style={{marginRight : "350px"}}>
              <Button bgColor={"#34ec53"} onClick={onClose}>OK</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }
