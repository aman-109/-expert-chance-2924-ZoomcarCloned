import {
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

export default function LoGin({ handleChange, handlelogin }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button
          onClick={onOpen}
          style={{ marginLeft: "20px", backgroundColor: "white", color: "grey" }}
        >
          Enter Mobile Number
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  name="Number"
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  maxLength={10}
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
              <Button
                style={{ backgroundColor: "#34ec53", color: "white" }}
                onClick={handlelogin}
              >
                Login
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };