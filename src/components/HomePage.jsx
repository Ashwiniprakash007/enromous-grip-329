import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Image,
  Br,
  Grid,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Homemodule.css";

const HomePage = () => {
  const [skills, setSkills] = useState();

  const data = [
    "Build better products",
    "Build better processes",
    "Build better workflows",
    "Build better skills",
    "Build better teams",
  ];

  useEffect(() => {
    let i = 0;
    let id = setInterval(() => {
      setSkills(data[i]);
      i++;
      if (i === data.length) {
        i = 0;
      }
    }, 3000);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Box>
        <Box>
          <Box className="main-box">
            <Box>
              <Heading className="main-head" as="h2" size="3xl">
                {skills}
              </Heading>
            </Box>
            <Heading
              as="h5"
              size="sm"
              color={"#FFFFFF"}
              fontWeight={"18px"}
              marginTop="55px"
            >
              Face the future with confidence—and with the skills and tools to
              thrive.
            </Heading>
            <Flex className="btn-grp" justifyContent={"center"}>
              <Button
                height={"55px"}
                width={"168px"}
                borderRadius="none"
                fontWeight={"bold"}
                backgroundImage={
                  "linear-gradient(to right,#f05a28,#ec008c,#f05a28);"
                }
                color={"white"}
                _hover={
                  "backgroundImage={linear-gradient(to right,#f05a28,#ec008c,#f05a28); }"
                }
              >
                VIEW PLANS
              </Button>
              <Button
                height={"55px"}
                width={"168px"}
                borderRadius="none"
                fontWeight={"bold"}
                color={"white"}
                backgroundColor={"black"}
                border={"1px solid white"}
                _hover={"backgroundColor={black}"}
              >
                TRY FOR FREE
              </Button>
            </Flex>
            <Box>
              <Heading
                as="h5"
                size="sm"
                color={" #aaa !important"}
                marginTop={"80px"}
              >
                HELPING THOUSANDS OF ORGANIZATIONS BUILD TECH SKILLS AT SCALE.
              </Heading>
              <Flex justifyContent={"center"} gap={"60px"} marginTop={"20px"}>
                <Box className="flex-box-1"></Box>
                <Box className="flex-box-2"></Box>
                <Box className="flex-box-3"></Box>
                <Box className="flex-box-4"></Box>
                <Box className="flex-box-5"></Box>
              </Flex>
            </Box>
            <Box className="big-line"></Box>
          </Box>
          <Box>
            <Flex>
              <Box className="triangle-1"></Box>
              <Box className="triangle-2"></Box>
            </Flex>
            <Heading
              as="h5"
              size="sm"
              color="#E40084"
              marginTop={"-570px"}
              marginRight="47%"
            >
              TRENDING TECHNOLOGIES
            </Heading>
            <Heading
              as="h3"
              size="lg"
              color="#FFFFFF"
              marginRight="35%"
              marginTop="16px"
            >
              Popular topics to learn now
            </Heading>
          </Box>
          <SimpleGrid
            columns={2}
            spacing="20"
            gap="30px"
            justifyContent={"center"}
            marginTop="40px"
          >
            <Box
              borderRadius={"10px"}
              marginLeft={"38%"}
              bg="#222222"
              height="165px"
              width="450px"
            >
              <Flex justifyContent={"space-between"}>
                <Box width="50%" height="163px">
                  <Heading
                    as="h6"
                    size="xs"
                    color="#E40084"
                    marginTop={"20px"}
                    marginLeft="-60%"
                  >
                    PATH
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"medium"}
                    fontSize="23px"
                    marginTop={"5px"}
                    marginLeft="-33%"
                  >
                    JavaScript
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"lighter"}
                    fontSize="19px"
                    marginLeft="-42%"
                    marginTop={"5px"}
                  >
                    11 Courses
                  </Heading>
                  <Flex>
                    <Heading
                      as="h5"
                      size="sm"
                      color="#FFFFFF "
                      fontWeight={"Bold"}
                      fontSize="17px"
                      marginLeft="10%"
                      marginTop={"25px"}
                    >
                      Take a look
                    </Heading>
                  </Flex>
                </Box>
                <Box width="20%" height="163px">
                  <Box height="100px" width="100px">
                    <Image
                      src={
                        "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"
                      }
                    />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box
              borderRadius={"10px"}
              bg="#222222"
              height="165px"
              width="450px"
            >
              <Flex justifyContent={"space-between"}>
                <Box width="50%" height="163px">
                  <Heading
                    as="h6"
                    size="xs"
                    color="#E40084"
                    marginTop={"20px"}
                    marginLeft="-60%"
                  >
                    PATH
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"medium"}
                    fontSize="23px"
                    marginTop={"5px"}
                    marginLeft="-99px"
                  >
                    Angular
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"lighter"}
                    fontSize="19px"
                    marginLeft="-42%"
                    marginTop={"5px"}
                  >
                    14 Courses
                  </Heading>
                  <Flex>
                    <Heading
                      as="h5"
                      size="sm"
                      color="#FFFFFF "
                      fontWeight={"Bold"}
                      fontSize="17px"
                      marginLeft="10%"
                      marginTop={"25px"}
                    >
                      Take a look
                    </Heading>
                  </Flex>
                </Box>
                <Box width="20%" height="163px">
                  <Box height="100px" width="100px">
                    <Image
                      src={
                        "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"
                      }
                    />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box
              borderRadius={"10px"}
              marginLeft={"38%"}
              bg="#222222"
              height="165px"
              width="450px"
            >
              <Flex justifyContent={"space-between"}>
                <Box width="50%" height="163px">
                  <Heading
                    as="h6"
                    size="xs"
                    color="#E40084"
                    marginTop={"20px"}
                    marginLeft="-60%"
                  >
                    PATH
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"medium"}
                    fontSize="23px"
                    marginTop={"5px"}
                    marginLeft="-22%"
                  >
                    Core Python
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"lighter"}
                    fontSize="19px"
                    marginLeft="-42%"
                    marginTop={"5px"}
                  >
                    12 Courses
                  </Heading>
                  <Flex>
                    <Heading
                      as="h5"
                      size="sm"
                      color="#FFFFFF "
                      fontWeight={"Bold"}
                      fontSize="17px"
                      marginLeft="10%"
                      marginTop={"25px"}
                    >
                      Take a look
                    </Heading>
                  </Flex>
                </Box>
                <Box width="20%" height="163px">
                  <Box height="100px" width="100px">
                    <Image
                      src={
                        "https://pluralsight.imgix.net/paths/python-7be70baaac.png"
                      }
                    />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box
              borderRadius={"10px"}
              bg="#222222"
              height="165px"
              width="450px"
            >
              <Flex justifyContent={"space-between"}>
                <Box width="50%" height="163px">
                  <Heading
                    as="h6"
                    size="xs"
                    color="#E40084"
                    marginTop={"20px"}
                    marginLeft="-60%"
                  >
                    PATH
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"medium"}
                    fontSize="23px"
                    marginTop={"5px"}
                    marginLeft="-150px"
                  >
                    C#
                  </Heading>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFFFFF"
                    fontWeight={"lighter"}
                    fontSize="19px"
                    marginLeft="-42%"
                    marginTop={"5px"}
                  >
                    19 Courses
                  </Heading>
                  <Flex>
                    <Heading
                      as="h5"
                      size="sm"
                      color="#FFFFFF "
                      fontWeight={"Bold"}
                      fontSize="17px"
                      marginLeft="10%"
                      marginTop={"25px"}
                    >
                      Take a look
                    </Heading>
                  </Flex>
                </Box>
                <Box width="20%" height="163px">
                  <Box height="100px" width="100px">
                    <Image
                      src={
                        "https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png?"
                      }
                    />
                  </Box>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
        <Box className="main-box-2" marginTop={"-205px"}>
          <Box
            textAlign={"left"}
            marginBottom={"-300px"}
            marginTop="300px"
            marginLeft={"100px"}
            paddingTop="200px"
          >
            <Heading as="h5" size="sm" color="#E40084">
              SEE WHAT'S NEW
            </Heading>
            <Heading as="h3" size="lg" color="#FFFFFF">
              Our latest features
            </Heading>
          </Box>
          <Box className="b-b-1">
            <Flex>
              <Box className="b-b-2">
                <Box className="skills"></Box>
                <Heading
                  as="h3"
                  size="lg"
                  color="#FFFFFF"
                  fontSize={"34px"}
                  marginLeft="5%"
                  textAlign="left"
                >
                  Deepen your people's expertise with hands-on labs
                </Heading>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF"
                  marginTop="20px"
                  marginLeft={"5%"}
                  fontSize={"17px"}
                  fontWeight={"normal"}
                  textAlign="left "
                  paddingRight="30px"
                >
                  Improve your teams’ confidence in their ability to deliver on
                  business objectives by building the right skills that meet
                  your org’s needs. Pluralsight offers 950+ labs that enable
                  hands-on practice in secure environments across domains such
                  as cloud (AWS, GCP and Azure), IT Ops, security, data and
                  software development.
                </Heading>
                <Flex>
                  <Heading
                    as="h5"
                    size="sm"
                    color="#FFFFFF "
                    fontWeight={"Bold"}
                    fontSize="19px"
                    marginLeft="5%"
                    marginTop={"25px"}
                    textAlign="left"
                  >
                    Learn more <span> > </span>{" "}
                  </Heading>
                </Flex>
              </Box>
              <Box className="b-b-3">
                <Image
                  height="100%"
                  width="100%"
                  src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/Cloud-labs-image2x-min.png"
                />
              </Box>
            </Flex>
          </Box>

          <Box className="b-bb-1" marginTop={"55px"}>
            <Flex>
              <Box className="b-bb-2">
                <Box className="flow"></Box>
                <Heading
                  as="h3"
                  size="lg"
                  color="#FFFFFF"
                  fontSize={"34px"}
                  marginLeft={"5%"}
                  textAlign="left"
                >
                  Unlock your people and upgrade your process like never before
                </Heading>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF"
                  marginTop="20px"
                  marginLeft={"5%"}
                  fontSize={"17px"}
                  fontWeight={"normal"}
                  textAlign="left"
                >
                  Pluralsight Flow's newest insights show you the what, how, and
                  why of your team's dynamics and delivery.
                </Heading>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF"
                  marginTop="20px"
                  marginLeft={"5%"}
                  fontSize={"17px"}
                  fontWeight={"normal"}
                  textAlign="left"
                >
                  The result? Healthier and more efficient engineering teams.
                </Heading>
                <Flex>
                  <Heading
                    as="h5"
                    size="sm"
                    color="#FFFFFF "
                    fontWeight={"Bold"}
                    fontSize="19px"
                    marginLeft="5%"
                    marginTop={"25px"}
                  >
                    Learn more <span> > </span>{" "}
                  </Heading>
                </Flex>
              </Box>
              <Box className="b-bb-3">
                <Image
                  height="100%"
                  width="100%"
                  src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/flow-interface.png"
                />
              </Box>
            </Flex>
          </Box>

          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="10px"
            marginTop={"40px"}
            justifyContent="center"
          >
            <Box
              w="420px"
              h="480px"
              bg="#323131"
              marginLeft={"90px"}
              borderRadius={"15px"}
            >
              <Box className="certifiacte"></Box>
              <Heading
                as="h3"
                size="lg"
                fontSize={"32px"}
                color="#FFFFFF"
                marginTop={"-60px"}
                marginLeft="9%"
                textAlign="left"
              >
                Empower your teams to grow their skills and their careers
              </Heading>
              <Heading
                as="h5"
                size="sm"
                color="#FFFFFF"
                marginTop="20px"
                marginLeft={"8%"}
                fontSize={"17px"}
                fontWeight="normal"
                textAlign="left"
                paddingRight="50px"
              >
                Prepare your team for certification exams with our expert
                authored content and practice exams.
              </Heading>
              <Flex>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF "
                  fontWeight={"Bold"}
                  fontSize="19px"
                  marginLeft="8%"
                  marginTop={"25px"}
                >
                  {" "}
                  Learn more <span> > </span>{" "}
                </Heading>
              </Flex>
            </Box>

            <Box
              w="420px"
              h="480px"
              bg="#323131"
              marginLeft={"40px"}
              borderRadius={"15px"}
            >
              <Box className="delivery"></Box>
              <Heading
                as="h3"
                size="lg"
                fontSize={"32px"}
                color="#FFFFFF"
                marginTop={"-60px"}
                marginLeft="9%"
                textAlign="left"
              >
                Make lasting workflow improvements with insights from your Jira
                data
              </Heading>
              <Heading
                as="h5"
                size="sm"
                color="#FFFFFF"
                marginTop="20px"
                marginLeft={"8%"}
                fontSize={"17px"}
                fontWeight="normal"
                textAlign="left"
                paddingRight="30px"
              >
                Go beyond Jira data and get visibility into what’s happening
                within your user stories, tasks and bugs. Flow’s delivery module
                helps you better understand how your team is working and can
                make lasting improvements to your workflow.
              </Heading>
              <Flex>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF "
                  fontWeight={"Bold"}
                  fontSize="19px"
                  marginLeft="8%"
                  marginTop={"25px"}
                >
                  Learn more <span> > </span>{" "}
                </Heading>
              </Flex>
            </Box>

            <Box
              w="420px"
              h="480px"
              bg="#323131"
              marginLeft={"10px"}
              borderRadius={"15px"}
            >
              <Box className="sandbox"></Box>
              <Heading
                as="h3"
                size="lg"
                fontSize={"32px"}
                color="#FFFFFF"
                marginTop={"-60px"}
                marginLeft="9%"
                textAlign="left"
                paddingRight="30px"
              >
                Utilize a space for unrestricted exploration
              </Heading>
              <Heading
                as="h5"
                size="sm"
                color="#FFFFFF"
                marginTop="20px"
                marginLeft={"8%"}
                fontSize={"17px"}
                textAlign="left"
                fontWeight="normal"
                paddingRight="10px"
              >
                Sandboxes gives your team a safe environment to practice what
                they're learning from expert-authored courses.
              </Heading>
              <Flex>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF "
                  fontWeight={"Bold"}
                  fontSize="19px"
                  marginLeft="8%"
                  marginTop={"25px"}
                >
                  Learn more <span> > </span>{" "}
                </Heading>
              </Flex>
            </Box>
          </Grid>
        </Box>

        <Box className="main-box-3" marginTop={"-300px"}>
          <Box
            textAlign={"left"}
            marginBottom={"-300px"}
            marginTop="300px"
            marginLeft={"70px"}
            paddingTop="100px"
          >
            <Heading as="h5" size="sm" color="#E40084">
              KEEP UP TO DATE
            </Heading>
            <Heading as="h3" size="lg" color="#FFFFFF">
              Discover more about Pluralsight
            </Heading>
          </Box>
          <Box>
            <Grid
              templateColumns="repeat(4, 1fr)"
              marginTop="350px"
              gap="5px"
              marginLeft="2%"
            >
              <Box h="450px" w="330px" marginLeft={"9%"}>
                <Box>
                  <Image
                    width="100%"
                    height="180px"
                    borderRadius={"15px"}
                    src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy/parsys/image/image-res.img.7ff160d9-5248-4b11-804e-cf66f7281f75.jpg"
                  />
                </Box>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFBA0E"
                  textAlign="left"
                  marginTop="20px"
                >
                  WHAT IS PLURALSIGHT SKILLS?
                </Heading>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF"
                  textAlign="left"
                  marginTop="50px"
                  fontSize={"17px"}
                  fontWeight="normal"
                >
                  Discover the fastest, most effective path to developing
                  technology skills
                </Heading>
              </Box>
              <Box h="450px" w="330px">
                <Box>
                  <Image
                    width="100%"
                    height="180px"
                    borderRadius={"15px"}
                    src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_1875049544/parsys/image/image-res.img.50c64034-5c04-4b3b-aa76-4d2ce92c35cc.png"
                  />
                </Box>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFBA0E"
                  textAlign="left"
                  marginTop="20px"
                >
                  PLURALSIGHT NAMED A LEADER FOR IT TRAINING
                </Heading>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF"
                  textAlign="left"
                  marginTop="30px"
                  fontSize={"17px"}
                  fontWeight="normal"
                >
                  We're honored to be recognized in the 2021 IDC MarketScape for
                  IT training.
                </Heading>
              </Box>

              <Box h="450px" w="330px" marginLeft={"-8%"}>
                <Box>
                  <Image
                    width="100%"
                    height="180px"
                    borderRadius={"15px"}
                    src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/flow-demo-thumbnail.png"
                  />
                </Box>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFBA0E"
                  textAlign="left"
                  marginTop="20px"
                >
                  LEARN HOW TO DE-FRICTION YOUR SOFTWARE DEVELOPMENT WORKFLOW
                  WITH FLOW
                </Heading>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF"
                  textAlign="left"
                  marginTop="30px"
                  fontSize={"17px"}
                  fontWeight="normal"
                  paddingRight="20px"
                >
                  Take a guided tour through Pluralsight Flow to see how
                  visibility can take your team to the next level
                </Heading>
              </Box>

              <Box h="450px" w="330px" marginLeft={"-14%"}>
                <Box>
                  <Image
                    width="100%"
                    height="180px"
                    borderRadius={"15px"}
                    src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_383891725/parsys/image/image-res.img.52e3fa3f-a6b2-4942-bee6-bdf060c01de7.png"
                  />
                </Box>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFBA0E"
                  textAlign="left"
                  marginTop="20px"
                >
                  CREATE YOUR FREE ACCOUNT
                </Heading>
                <Heading
                  as="h5"
                  size="sm"
                  color="#FFFFFF"
                  textAlign="left"
                  marginTop="30px"
                  fontSize={"17px"}
                  fontWeight="normal"
                  paddingRight="20px"
                >
                  Build new tech skills on us with free access to 50+ expert-led
                  courses, assessments and more.
                </Heading>
              </Box>
            </Grid>
          </Box>
        </Box>

        <Box className="main-box-4">
          <Flex>
            <Box className="laptop-img">
              <Image
                h="100%"
                w="100%"
                src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/targeted_section/targeted-parsys-customer-types-2/generic_block_143764/parsys/columns/column-parsys-1/generic_block/image-res.img.09fd35c0-9b3d-49f5-87d5-a40b781ed722.png"
              />
            </Box>
            <Box className="satrangi">
              <Box marginTop={"90px"} marginLeft="55px">
                <Image
                  h="16px"
                  w="140px"
                  src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/targeted_section/targeted-parsys-customer-types-2/generic_block_143764/parsys/columns/column-parsys-2/generic_block/parsys/column_control/column-parsys-1/image/image-res.img.050e2bc0-c7c3-4d8a-81b1-1ae7b5f50163.png"
                />
              </Box>
              <Heading
                as="h3"
                size="lg"
                color="#FFFFFF"
                textAlign="left"
                marginLeft={"55px"}
                marginTop="30px"
              >
                Winning the talent war with a scalable tech skills platform
              </Heading>
              <Heading
                as="h4"
                size="sm"
                color="#FFFFFF"
                textAlign="left"
                marginLeft={"55px"}
                fontWeight="normal"
                marginTop="30px"
                fontSize={"17px"}
                paddingRight="150px"
              >
                Evolving a 20-year-old company, increasing innovation and
                accelerating time to delivery requires fresh skills. See how
                VMware’s globally dispersed teams use Pluralsight to leverage
                the latest developments in technology as they find new ways to
                serve customers.
              </Heading>
              <Button
                color="#FFFFFF"
                bg="#000000"
                h="54px"
                w="255px"
                _hover={"backgroundColor={black}"}
                borderRadius="none"
                marginRight={"45%"}
                marginTop="35px"
                fontWeight={"bold"}
              >
                HOW THEY'RE SKILLING UP
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box className="main-box-5" paddingTop="300px">
          <Box>
            <Heading
              as="h5"
              size="sm"
              color="#E40084"
              paddingTop={"-100px"}
              marginTop="-200px"
            >
              FOLLOW US
            </Heading>
            <Heading as="h3" size="lg" color="#FFFFFF">
              Share your skills
            </Heading>
          </Box>
          <Flex padding="100px" paddingLeft={"30px"}>
            <Box
              className="tweet-box-1"
              h="220px"
              w="400px"
              backgroundColor={"#FFFFFF"}
              marginLeft="7%"
              borderRadius={"5px"}
            >
              <Flex>
                <Box>
                  <Image
                    h="35px"
                    w="35px"
                    marginLeft={"10px"}
                    marginTop="15px"
                    src="https://pbs.twimg.com/profile_images/1308211174429749248/ugAopGfO_bigger.jpg"
                  />
                  <Heading
                    as="h6"
                    size="xs"
                    fontSize={"14px"}
                    marginLeft="60px"
                    marginTop={"-30px"}
                  >
                    Willam Masci
                  </Heading>
                  <Heading
                    as="h6"
                    size="xs"
                    fontSize={"12px"}
                    marginLeft="20px"
                    marginTop={"-1px"}
                    color="#323131"
                  >
                    @bilver3
                  </Heading>
                </Box>
                <Spacer />
                <Box>
                  <Image
                    className="twter"
                    src="https://www.computerhope.com/jargon/t/twitter.png"
                  />
                </Box>
              </Flex>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="10px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                Yesterday I passed AZ-104 exam.<span>@pluralsight</span>
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                Courses are great to help prepare for these exams.{" "}
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                <span>#Citrixctp #azure</span>
              </Heading>
            </Box>

            <Box
              h="220px"
              w="400px"
              backgroundColor={"#FFFFFF"}
              marginLeft="2%"
              borderRadius={"5px"}
            >
              <Flex>
                <Box>
                  <Image
                    h="35px"
                    w="35px"
                    marginLeft={"10px"}
                    marginTop="15px"
                    src="https://pbs.twimg.com/profile_images/1289580947009155072/uegFC50F_bigger.jpg"
                  />
                  <Heading
                    as="h6"
                    size="xs"
                    fontSize={"14px"}
                    marginLeft="10px"
                    marginTop={"-30px"}
                  >
                    Judy
                  </Heading>
                  <Heading
                    as="h6"
                    size="xs"
                    fontSize={"12px"}
                    marginLeft="50px"
                    marginTop={"-1px"}
                    color="#323131"
                  >
                    @judy_seyram
                  </Heading>
                </Box>
                <Spacer />
                <Box>
                  <Image
                    className="twter"
                    src="https://www.computerhope.com/jargon/t/twitter.png"
                  />
                </Box>
              </Flex>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="10px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                The best thing that happned to me in 2020 was
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                <span>#GADS2020</span>which intoduced to me{" "}
                <span>@pluralsight</span>. My
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                intrest in IT programming peaked which i joined the
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                program and now i beleve this is the career path i want
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                to take<span>#Womenintech #WomenWhoCode #Andela</span>
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                <span>#Pluralsight #GADS https://t.co/oYchlij6V5w</span>
              </Heading>
            </Box>

            <Box
              h="220px"
              w="400px"
              backgroundColor={"#FFFFFF"}
              marginLeft="2%"
              borderRadius={"5px"}
            >
              <Flex>
                <Box>
                  <Image
                    h="35px"
                    w="35px"
                    marginLeft={"10px"}
                    marginTop="15px"
                    src="https://pbs.twimg.com/profile_images/1537214776018972672/KWMnJ2bB_bigger.jpg"
                  />
                  <Heading
                    as="h6"
                    size="xs"
                    fontSize={"14px"}
                    marginLeft="50px"
                    marginTop={"-30px"}
                  >
                    Javier Montero
                  </Heading>
                  <Heading
                    as="h6"
                    size="xs"
                    fontSize={"12px"}
                    marginLeft="30px"
                    marginTop={"-1px"}
                    color="#323131"
                  >
                    @DataSlugger
                  </Heading>
                </Box>
                <Spacer />
                <Box>
                  <Image
                    className="twter"
                    src="https://www.computerhope.com/jargon/t/twitter.png"
                  />
                </Box>
              </Flex>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="10px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                I love the sechedule reminders feature that{" "}
                <span>@pluralsight</span>
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                has added (well not sure when. but today i saw that) you
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                make more simple my life. good job guys. <span>#learning</span>
              </Heading>
              <Heading
                as="h6"
                size="xs"
                textAlign="left"
                marginTop="2px"
                fontWeight={"normal"}
                marginLeft={"10px"}
              >
                <span>https://t.co/OEEjxVQjbm</span>
              </Heading>
            </Box>
          </Flex>
        </Box>

        <Box className="main-box-6">
          <Box>
            <Image
              paddingTop="50px"
              paddingLeft={"20px"}
              src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_1609496607/parsys/columns/column-parsys-1/animation_wrapper/parsys/image/image-res.img.fb67a8ae-f0d4-436b-a836-1de774719180.png"
            />
          </Box>
          <Heading
            as="h2"
            size="xl"
            color="#FFFFFF"
            textAlign="left"
            paddingLeft={"55px"}
          >
            See our growth,
          </Heading>
          <Heading
            as="h2"
            size="xl"
            color="#FFFFFF"
            textAlign="left"
            paddingLeft={"55px"}
          >
            progress and evolution
          </Heading>
          <Heading
            as="h5"
            size="sm"
            color="#FFFFFF"
            textAlign="left"
            marginTop="20px"
            paddingLeft={"55px"}
            fontWeight="normal"
            fontSize={"18px"}
          >
            At Pluralsight, we see first-hand every day how technology makes the
            impossible,
          </Heading>
          <Heading
            as="h5"
            size="sm"
            color="#FFFFFF"
            textAlign="left"
            paddingLeft={"55px"}
            fontWeight="normal"
            fontSize={"18px"}
            marginTop="2px"
          >
            possible. It’s why Pluralsight One exists: To advance our mission of
            democratizing
          </Heading>
          <Heading
            as="h5"
            size="sm"
            color="#FFFFFF"
            textAlign="left"
            paddingLeft={"55px"}
            fontWeight="normal"
            fontSize={"18px"}
            marginTop="2px"
          >
            technology skills, challenging assumptions about solutions and
            create significant,
          </Heading>
          <Heading
            as="h5"
            size="sm"
            color="#FFFFFF"
            textAlign="left"
            paddingLeft={"55px"}
            fontWeight="normal"
            fontSize={"18px"}
            marginTop="2px"
          >
            {" "}
            lasting social impact.
          </Heading>
          <Button
            height={"55px"}
            width={"230px"}
            borderRadius="none"
            fontWeight={"bold"}
            color={"white"}
            backgroundColor={"black"}
            border={"1px solid white"}
            _hover={"backgroundColor={black}"}
            marginLeft="-78%"
            marginTop="30px"
          >
            FOR NONPROFITS
          </Button>
        </Box>

        <Box className="main-box-7">
          <Flex>
            <Heading
              as="h2"
              size="xl"
              color="#FFFFFF"
              textAlign="left"
              marginTop="90px"
              marginLeft="70px"
            >
              Insights that give you an edge
            </Heading>
            <Button
              marginTop="90px"
              marginLeft="30%"
              h="55px"
              w="260px"
              borderRadius="none"
              fontWeight={"bold"}
              backgroundImage={
                "linear-gradient(to right,#f05a28,#ec008c,#f05a28);"
              }
              color={"white"}
              _hover={
                "backgroundImage={linear-gradient(to right,#f05a28,#ec008c,#f05a28); }"
              }
            >
              TRY FOR FREE
            </Button>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
