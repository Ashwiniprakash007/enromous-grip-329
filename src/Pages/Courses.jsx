import {
  Box,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  Button,
  Spinner,
  Spacer,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./course.css";
import axios from "axios";

import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import Filter from "./Filter";
import Content from "./Content";
import { useSearchParams, useLocation } from "react-router-dom";
import Pagination from "./Pagination";

const Courses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(7);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Filter And Sort

  useEffect(() => {
    const type = searchParams.get("type");

    const getCourseParams = {
      params: {
        level: searchParams.getAll("level"),
        _sort: type && "type",
        _order: type,
      },
    };
    const fetchData = async (params) => {
      console.log(params);
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/courses?_page=${page}&_limit=${limit}/`,
        params
      );
      setData(res.data);
      setCount(Number(res.headers["x-total-count"]));
      setLoading(false);
    };
    if (!data.length || location.search) {
      fetchData(getCourseParams);
    } else if (location.search === "") {
      fetchData();
    }
  }, [page, data.length, limit, location.search, searchParams]);

  const paginate = (pageNumber) => setPage(pageNumber);

  const totalPage = Math.ceil(count / limit);

  return (
    <Box>
      {/* Image Box */}
      <Flex className="imageBox">
        <Image
          src="https://www.pluralsight.com/content/dam/pluralsight2/product/v2/logos/logo-skills.png"
          w="102px"
          h="18px"
        ></Image>
        <Text
          fontSize="2.2rem"
          fontWeight="bold"
          noOfLines={[3, 2, 4]}
          lineHeight="1.2"
          mt="8px"
        >
          Thousands of courses authored by <br /> our network of industry
          experts
        </Text>
      </Flex>
      {/* SearchBox */}
      <HStack ml="3%" mt="5px" mb="2.5">
        <Flex>
          <Box w="100%" h="10">
            <Text fontSize="1.5rem" fontWeight="semibold">
              Search
            </Text>
          </Box>
        </Flex>
      </HStack>
      <HStack spacing="28px" ml="3%" mr="3%">
        <Box
          w="80%"
          h="54px"
          bg="#363638"
          borderRadius="2px"
          display="Flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <Input
            placeholder="Search"
            border="none"
            p="26px"
            focusBorderColor="none"
          />
          <CloseIcon bg="transparent" mr="25px" cursor="pointer" />
          <SearchIcon bg="transparent" mr="25px" cursor="pointer" />
        </Box>
        <Box
          w="16%"
          h="52px"
          width={["100%", 0.5, 0.25]}
          border="1px solid white"
        >
          <div className="box">
            <select>
              <option>Sort by</option>
              <option>Newest</option>
              <option>Course A to Z</option>
              <option>Course Z to A</option>
            </select>
          </div>
        </Box>
      </HStack>
      {/* Filter  */}
      <Flex mt="10px" w="100%" gap="10px" h="1050px">
        <Box w="30%" h="300px" ml="3%">
          <Filter />
        </Box>

        {/* data */}
        <Box w="75%" ml={"8%"} position="relative">
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              position="absolute"
              top="50%"
              left="50%"
              transform="translateY(-50%,-50%)"
            />
          ) : (
            data.map((item) => (
              <Box key={item.id}>
                <Content {...item} loading={loading} />
              </Box>
            ))
          )}

          {/* Pagination */}
          <Box
            className="paginationBox"
            position="absolute"
            right="10"
            bottom="10"
          >
            <HStack mt="10px" justifyContent={"flex-end"}>
              <Button
                size={"sm"}
                disabled={page === 1}
                colorScheme={"blue"}
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
              >
                Prev
              </Button>
              <Pagination
                postsPerPage={limit}
                totalPosts={totalPage}
                paginate={paginate}
              />
              <Button
                size={"sm"}
                disabled={page === totalPage}
                colorScheme={"blue"}
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Next
              </Button>
            </HStack>
          </Box>
        </Box>
      </Flex>
      <Grid
        h="100px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={1}
      >
        <GridItem colSpan={3}>
          <Flex justifyContent={"flex-start"} ml="3%" alignItems={"center"}>
            <Text fontWeight={"bold"} fontSize="20px">
              Browse By Link
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} textAlign="left" lineHeight={"2"} ml="8%">
          Software Development
          <Flex ml="5%" mt="3px">
            <UnorderedList
              listStylePosition={"outside"}
              textAlign="left"
              lineHeight={"2"}
            >
              <ListItem className="listItem">
                <a href="/#">Web Development</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Mobile Development</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">JavaScript</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">C#</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Python</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Node.js</a>
              </ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} textAlign="left" lineHeight={"2"} ml="8%">
          IT Ops
          <Flex ml="5%" mt="3px">
            <UnorderedList
              listStylePosition={"outside"}
              textAlign="left"
              lineHeight={"2"}
            >
              <ListItem className="listItem">
                <a href="/#">IT Certifications</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Security</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Database Administration</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Virtualization</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">IT Networking</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Servers</a>
              </ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} textAlign="left" lineHeight={"2"} ml="8%">
          Information & Cyber Security
          <Flex ml="5%" mt="3px">
            <UnorderedList
              listStylePosition={"outside"}
              textAlign="left"
              lineHeight={"2"}
            >
              <ListItem className="listItem">
                <a href="/#">Security Certifications</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Security Fundamentals</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Security Auditing</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Penetration Testing</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Digital Forensics</a>
              </ListItem>
              <ListItem className="listItem">
                <a href="/#">Malware Analysisss</a>
              </ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>
      </Grid>{" "}
    </Box>
  );
};

export default Courses;
