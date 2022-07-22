import React from "react";
import { Box, Image, Heading, Button, Icon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import logo from "./flowlogo.png";

export const Flow = () => {
  return (
    // Main container which contains all the components
    <Box w="100%" minH="100vh" bg="#181818" pt="20ch" textAlign="center">
      {/* Logo of flow on the top */}
      <Image src={logo} w="15rem" h="4rem" m="auto" />

      {/* Page heading */}
      <Heading size="3xl" color="white">
        Build better workflows
      </Heading>

      {/* The container which contains Core section and Plus section */}
      <Box w="80%" bg="black" m="auto" mt="10ch" display="flex" flexWrap="wrap">
        {/* Core section box */}
        <Box
          w="50%"
          h="40%"
          border="1px"
          borderColor="black"
          bg="#181818"
          p="10ch"
        >
          {/* Heading of core section */}
          <p style={{ fontSize: "40px", color: "white" }}>Core</p>

          {/* Price of core section */}
          <Heading color="white" size="3xl" display="inline">
            $38{" "}
            <Heading size="sm" display="inline">
              /month
            </Heading>
          </Heading>
          <p style={{ color: "white", marginTop: "3ch", fontSize: "15px" }}>
            Gain new visibility into your team's software development process.
          </p>

          {/* button to route to signup page */}
          <Button
            w="70%"
            h="7ch"
            mt="4ch"
            color="white"
            bg="#0074AB"
            _hover={{ opacity: "0.7" }}
          >
            START WITH CORE
          </Button>
        </Box>
        {/* Core section ends here */}

        {/* Plus section box */}
        <Box
          w="50%"
          h="40%"
          border="1px"
          borderColor="black"
          bg="#181818"
          p="10ch"
        >
          {/* Heading of plus section */}
          <p style={{ fontSize: "40px", color: "white" }}>Plus</p>

          {/* Pricing section */}
          <Heading color="white" size="3xl" display="inline">
            $50{" "}
            <Heading size="sm" display="inline">
              /month
            </Heading>
          </Heading>
          <p style={{ color: "white", marginTop: "3ch", fontSize: "15px" }}>
            Accelerate impact while using data to make decisions and drive
            growth.
          </p>

          {/* button to route to signup page */}
          <Button
            w="70%"
            h="7ch"
            mt="4ch"
            color="white"
            bg="#0074AB"
            _hover={{ opacity: "0.7" }}
          >
            START WITH PLUS
          </Button>
        </Box>
        {/* Plus section ends here */}

        {/* Core features box */}
        <Box w="50%" h="65%" bg="#000000" p="10ch">
          <Heading color="white" size="md" mb="4ch">
            FEATURES
          </Heading>

          {/* List starts here */}
          <List spacing={3}>
            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Unlimited repos.
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Up to 36 month data import
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              GitHub, Bitbucket, GitLab, Jira
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Email & Slack notifications
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Mob/Pair support
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Email support
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Core fundamental metrics
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Work log
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Ticket log
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Review workflow
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Single sign-on
            </ListItem>
          </List>
          {/* List ends here */}
        </Box>
        {/* core features box ends here */}

        {/* Plus features box */}
        <Box w="50%" h="65%" bg="#000000" p="10ch">
          <Heading color="white" size="md" mb="4ch">
            CORE FEATURES PLUS
          </Heading>

          {/* List starts here */}
          <List spacing={3}>
            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Team health insights
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Retrospective
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Proficiency
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Project timeline
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Sprint movement
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Check-in report
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              API access
            </ListItem>

            <ListItem color="white" fontSize="20px" textAlign="left">
              <ListIcon as={CheckIcon} color="blue.400" boxSize={6} />
              Single sign-on
            </ListItem>
          </List>
          {/* List ends here */}
        </Box>
        {/* Plus features box ends here */}
      </Box>
      {/* Container contains Core and Plus ends here */}
      <p
        style={{
          color: "white",
          fontSize: "15px",
          opacity: "0.7",
          marginTop: "5ch",
          height: "7ch",
        }}
      >
        *All per-user products require an annual contract.
      </p>
    </Box>
    // Main container ends here
  );
};
