import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  description: "njnk",
  mobile: 2,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "username": {
      return {
        ...state,
        username: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "mobile": {
      return {
        ...state,
        mobile: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  console.log(state);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.AuthReducer.isLoading);

  const handleSignUp = (e) => {
    // e.preventDefault();

    if (state) {
      dispatch(signUp(state)).then((r) => {
        console.log(r.payload.message);
        if (r.payload.message === "Registration failed, user already exists") {
          toast({
            title: "User already exists.",
            description: "Try with different Username or mobile No",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
        } else if (r.payload.message === "Registration Success") {
          toast({
            title: "You are successfully  reigstered",
            description: "Please Login",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top-right",
          });
          navigate("/login", { replace: true });
        }
      });
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#0D0F12"}
      color="white"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={1} px={6}>
        {/* <Image src={logo} w="20rem" h="10rem" m="0"></Image> */}

        <Stack align={"center"} mt="0">
          <Heading fontSize={"4xl"} textAlign={"center"} mt="0">
            Sign up
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"#212121"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    value={state.name}
                    onChange={(e) =>
                      setter({ type: "name", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="userName">
                  <FormLabel>User Name</FormLabel>
                  <Input
                    type="text"
                    value={state.username}
                    onChange={(e) =>
                      setter({ type: "username", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  setter({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input
                type="number"
                value={state.mobile}
                onChange={(e) =>
                  setter({ type: "mobile", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={(e) =>
                    setter({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "#0074AB",
                }}
                onClick={handleSignUp}
                isLoading={loading}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
