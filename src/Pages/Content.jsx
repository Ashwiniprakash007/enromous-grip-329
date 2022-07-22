import { TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./course.css";

const Content = ({ ...item }) => {
  const { title, author, duration, level, rating } = item;

  return (
    <Flex
      h="135px"
      alignItems={"center"}
      ml="25px"
      cursor={"pointer"}
      borderBottom="1px solid gray"
    >
      <Box>
        <Text fontSize={"19px"} align={"start"} fontWeight="bold">
          {title}
        </Text>
        <Text align={"start"} m="0">
          by {author}
        </Text>
        <Flex>
          <HStack spacing={"22px"}>
            <Box>
              <Text
                mt="6px"
                fontWeight={"light"}
                align={"start"}
                display="inline"
              >
                {duration} <TimeIcon mb={"2px"} fontSize="sm" />
              </Text>
            </Box>
            <Box>
              <Text
                mt="6px"
                fontWeight={"light"}
                align={"start"}
                display="inline"
              >
                {level}
                <Image
                  src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course/level.png"
                  display="inline"
                  h={"14px"}
                  w="14px"
                  ml={"6px"}
                ></Image>
              </Text>
            </Box>
            <Box>
              <Text
                mt="6px"
                fontWeight={"light"}
                align={"start"}
                display="inline"
              >
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-stroke"></i>({rating})
              </Text>
            </Box>
          </HStack>
          <Box> </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Content;
