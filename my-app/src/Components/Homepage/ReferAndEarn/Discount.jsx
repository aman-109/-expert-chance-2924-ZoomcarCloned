
import { Grid, GridItem, Box, Image, Flex, Heading, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,Text} from "@chakra-ui/react";


export default function Discount() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div onClick={onOpen}>
        <a>
          <Flex>
            <Box pl="15px" pt="15px" w={"65%"}>
              <Box fontSize="x-large" fontWeight="bold">
                UPTO 50% Off
              </Box>
              <Box fontSize="lg" color="grey" mb={8}>
                on your first booking from the app!
              </Box>
              <Box
                border="2px dashed grey"
                fontSize="larger"
                fontWeight="bold"
                color="rgb(187,184,184)"
                    p="2"
                w={"75%"}
              >
                Use Code: ZOOMAPP
              </Box>
              <Box
                fontSize="x-large"
                color="rgb(45,174,45)"
                fontWeight="bold"
                mt={6}
              >
                Install Zoomcar App now!
              </Box>
            </Box>
            <Box w="35%" h="250">
              <Image
                src="https://www.zoomcar.com/img/cellphone.png"
                h="100%"
                w="100%"
              />
            </Box>
          </Flex>
        </a>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Install to get upto 50% off</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Box style={{width : "60%", marginRight : "10%"}}>
                  {/* <Box>Install to get upto 50% off</Box> */}
                  <Box style={{paddingLeft : "14%", marginTop : "5%", marginBottom : "10%"}}>
                    <ul>
                      <li>Open your phone camera and point it at the QR code</li>
                      <li>Alternatively download any QR code scanner to scan</li>
                      <li>Click on the link generated to download Zoomcar</li>
                    </ul>
                  </Box>
                </Box>
                <Box style={{width : "40%", marginTop : "8%"}}>
                  <img src="https://www.zoomcar.com/img/image.png" alt="" />
                </Box>
              </Flex>
             
            </ModalBody>
  
            <ModalFooter mr={10}>
              <Flex>
                <img src="https://www.zoomcar.com/img/google-play-logo.png" alt="" style={{marginRight : "5px"}} />
                <img src="https://www.zoomcar.com/img/app-store-apple-logo.png" alt="" style={{marginRight : "10px"}}/>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }