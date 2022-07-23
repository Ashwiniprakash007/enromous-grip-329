import React from "react";
import { Box, Heading, Button, Image } from "@chakra-ui/react";
import skills from "./skills-logo.png";
import flowlogo from "./flowlogo.png";
import Navbar from "../../Navbar/Navbar";
import { Footer } from "../../Footer/Footer";
export const Pricing = () => {
  return (
    // Main Container
    <>
      <Navbar />
      <Box w="100%" h="800px" bg="#181818" textAlign="center" pt="13ch">
        {/* Headings of the page */}

        <Heading as="h2" size="l" noOfLines={1} color="#E40084">
          PLANS & PRICING
        </Heading>
        <Heading
          size="2xl"
          color="White"
          h="5ch"
          w="50%"
          m="auto"
          mb="2ch"
          mt="15px"
        >
          Giving you the skills and insights to build better
        </Heading>

        {/* the box which contain Skills box and flow box */}

        <Box w="60%" m="auto" display="flex" gap={2}>
          {/* Skills Box */}

          <Box bg="#222222" w="28.5rem" h="25.5rem" p="4ch" color="white">
            {/* Logo of skills box */}

            <Image src={skills} w="80%" m="auto" mb="2ch" />
            <p style={{ fontSize: "17px" }}>
              See where your skills stand, master the latest technologies and
              show off your expertise.
            </p>
            <Button
              bg="orange.600"
              w="60%"
              h="6ch"
              mt="4ch"
              _hover={{ opacity: 0.7 }}
            >
              PICK A PLAN
            </Button>
            <Heading as="h2" size="md" mt="4ch">
              Learn more about Skills >
            </Heading>
          </Box>
          {/* Here skills box ends */}

          {/* Flow box */}

          <Box bg="#222222" w="28.5rem" h="25.5rem" p="4ch" color="white">
            {/* Logo of Flow box */}

            <Image src={flowlogo} w="80%" m="auto" mb="2ch" />
            <p style={{ fontSize: "17px" }}>
              Maximize productivity and accelerate product release cycles.
            </p>
            <Button
              bg="blue.600"
              w="60%"
              h="6ch"
              mt="4ch"
              _hover={{ opacity: 0.7 }}
            >
              PICK A PLAN
            </Button>
            <Heading as="h2" size="md" mt="4ch">
              Learn more about Flow >
            </Heading>
          </Box>
          {/* here flow box ends */}
        </Box>
        {/* here container containing skills box and flow box ends */}
      </Box>
      <Footer />
    </>
    // Here main container ends
  );
};
