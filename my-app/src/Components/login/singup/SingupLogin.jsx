
import {
  Box,
  Flex,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../../../Styles/signup/signup.css";
import LoGin from "./Login";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AppContext";

export default function SignupLogin() {
  const toast = useToast()
  const {auth,setAuth,setCheckAuth} =useContext(AuthContext)
  const [userExist, setUserExist] = useState(false);
  const [isExist, setExist] = useState(true);
  const navigate = useNavigate()


  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Number: "",
    Password: "",
  });

  useEffect(() => {
    setUserExist(!userExist);
  }, [isExist]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const userData={
      ...user,
      [name]: value,
    };

    setUser(userData)
    setAuth(userData)
  };

  const toaster=()=>{
    return toast({title: 'User not found !',
    description: "Please create your account.",
    status: 'warning',
    position:"top-right",
    duration: 2000,
    isClosable: true})
  }
  const successToaster=()=>{
    return toast({title: 'Success',
    description: "Account Created Successfully.",
    status: 'success',
    position:"top-right",
    duration: 1000,
    isClosable: true})
  }

  const handlelogin=()=>{
    // axios
    //   .post("https://zoomcar-servertest.herokuapp.com/login", user)
    //   .then((res) => {
    //     // alert(res.data.message);
    //     // console.log(res)
    //     const newData= {
    //       email
    //     }
    //     // setCookie("auth", true);
    // console.log(user.Number)
    

    if((user.Number ===auth.Number)||(user.Password===auth.Password)) {
      // alert("login successful !")
      toaster()
      setTimeout(()=>{

        setExist(!isExist);
      },2000)
      // navigate
    }

        // setCookie("userName", res.data.user.Name);
        // setCookie("userEmail", res.data.user.Email);
        // setCookie("userNumber", res.data.user.Number);
        // dispatch(AuthAction(res.data.user));
        // navigate("/");
      //   window.location.reload(true);
      // })
      // .catch((err) => {
        // if (err.response.data.message == "Password not matched") {
        //   alert(err.response.data.message);
        // } else {
        //   alert(`${err.response.data.message} please register`);
        // }
      //   console.log(err)
      // });
  }

  const handleSignup=()=>{
    successToaster()
    setTimeout(()=>{
      navigate("/")
    },2000)
    // setAuth(user)
    setCheckAuth(true)
  }

  return (
    <Box>
      <Box p={8} w="40%" m={"auto"} mt={5}>
        <Box w="70%" m="auto">
          <Image
            src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
            w={"100%"}
          />
        </Box>
        <Box w={"73%"} m={"auto"} mt={"15px"} p={2}>
          <Box fontSize={"lg"} fontWeight={"bold"} mb="20px">
            Enter details to login/sign-up
          </Box>
          <Box>
            <Flex mb={3}>
              <Flex mt={2}>
                <Box w={7} mt="2px">
                  <Image src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648" />
                </Box>
                <Box mr={2}>+91</Box>
              </Flex>
              <Box borderLeft="1px solid black">
                {userExist == true ? (
                  <LoGin
                    handleChange={handleChange}
                    handlelogin={handlelogin}
                  />
                ) : (
                  <Signup
                    handleChange={handleChange}
                    handleSignup={handleSignup}
                  />
                )}
              </Box>
            </Flex>
            <hr />
            <Box mb={3} mt={3}>
              <a href="">Continue With Email ID</a>
            </Box>
            <hr />
            <Flex mt={3}>
              <Box mr={2} mt="3px">
                <a href="">Continue via Social</a>
              </Box>
              <Box mr={2}>
                <Image src="https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg" />
              </Box>
              <Box>
                <Image src="https://www.zoomcar.com/build/279de03b0c8ecdb4db56a79da6e775e6.svg" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
