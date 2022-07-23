import React, { useState } from "react";
import logo from "./Logo.png";
import mainbg from "./mainbg.png";
import {
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/AuthReducer/action";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.AuthReducer.isLoading);
  const token = useSelector((state) => state.AuthReducer.token);

  const loginHandler = (e) => {
    if (username && password) {
      const params = {
        username,
        password,
      };
      dispatch(login(params)).then((r) => {
        console.log(r);
        if ("login/success") {
          toast({
            title: "Login Successfull",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top-right",
          });
          navigate("/", { replace: true });
        } else {
          toast({
            title: "Please Enter correct details",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top-right",
          });
        }
      });
    } else {
      toast({
        title: "Please fill all the details",
        status: "warning",
        duration: 1000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <Flex className="container" h="100vh" bg="#0d0f12">
      <Box
        bg="#0D0F12"
        // h="100vh"
        w="50%"
        textAlign="center"
      >
        {/* Logo */}
        <Image src={logo} w="50%" m="auto" mt="0" />

        {/* Email and password Inputs */}
        <FormControl w="85%" m="auto" mt={"0"}>
          <FormLabel color="white" fontSize="2.5ch" mt="10px" mb={"0"}>
            Email or Username
          </FormLabel>
          <Input
            type="email"
            mb="3ch"
            color="grey"
            size="sm"
            h="7ch"
            w="100%"
            m={"auto"}
            mt="5px"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormLabel color="white" fontSize="2.5ch" mt="25px" mb={"0"}>
            Password
          </FormLabel>
          <Input
            type="password"
            mb="3ch"
            color="grey"
            size="sm"
            h="7ch"
            w="100%"
            mt="5px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {/* Sign in Button */}
        <Button
          w="85%"
          color="white"
          bg="#0074AB"
          mb="3ch"
          h="5ch"
          _hover={{ opacity: 0.7 }}
          onClick={loginHandler}
          isLoading={loading}
        >
          Sign in
        </Button>
        <br />

        {/* attributes */}
        <a href="/#" style={{ color: "#1A92D6", fontSize: "20px" }}>
          Forget Password?
        </a>
        <br />

        {/* Breakes to give a little space */}

        {/* Divider */}
        <br />
        <br />
        <hr
          style={{
            margin: "auto",
            width: "85%",
            color: "#333840",
          }}
        />

        {/* New account Button */}
        <Button
          color="white"
          bg="#2D3137"
          mt="3ch"
          _hover={{ opacity: 0.7 }}
          w="85%"
          mb="3ch"
          h="5ch"
          onClick={() => {
            navigate("/pricing");
          }}
        >
          Create an account
        </Button>

        {/* Copyright claimer */}
        <p
          style={{
            color: "white",
            fontSize: "11px",
            marginTop: "6ch",
            opacity: "0.6",
          }}
        >
          Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.
        </p>
      </Box>
      <Box
        bg="#000000"
        w="50%"
        h="800px"
        className="backgroundLoginImage"
        position={"relative"}
      >
        <Image className="backgroundLoginImage" src={mainbg}></Image>
      </Box>
    </Flex>
  );
};
