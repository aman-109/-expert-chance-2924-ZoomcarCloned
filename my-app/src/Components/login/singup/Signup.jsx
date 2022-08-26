import {
    Box,
    Flex,
    Image,
    Input,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";



  
export default function Signup({ handleChange, handleSignup }) {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Box color={"#10a310"}>New here? Welcome!</Box>
              <Box>
                The mobile number has not been registered with us. Lets create a
                new account.
              </Box>
              <br />
              <br />
              <Box>Create your account</Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="Name"
                  onChange={handleChange}
                  placeholder="Name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="Email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  name="Number"
                  onChange={handleChange}
                  placeholder="Mobile Number"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="Password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button backgroundColor={"#34ec53"} onClick={handleSignup}>
                Continue
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };