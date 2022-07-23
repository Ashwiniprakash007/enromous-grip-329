import React from 'react'
import { StarIcon } from "@chakra-ui/icons"
import 'font-awesome/css/font-awesome.min.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import {Spacer,Avatar,Image, Flex,Button,Center,Box,Heading,Text,Square} from '@chakra-ui/react'
const CourseInfo = () => {
  let bgStyle = {
    backgroundColor:"#222222"
  }
    return (
      <Box ml={"10px"} fontSize={"30px"} color={ "white"} >
      <Box mt={"50px"} ml={ "10px"}>
          <Heading color={"white"} as={"h1"} fontSize="60px" >Agile in the Real World</Heading>
          <Flex mt={'30px'} mb={ "30px"} gap={10}>
          <Flex mt={"15px"} fontSize={"20px"} gap={3}>
              <span style={{color:"red"}}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half"></i>
            </span>
           
            </Flex>
            <Text>By Jerem jerrel</Text>
            </Flex>
          <Text color={ "white"}>This isn't pie-in-the-sky agile, this is agile for the real world.</Text>
            </Box>
           
        <Flex fontWeight={"PS Commons"} fontSize={ "30px"} gap={4} flexDirection={"column"} flex={ 1} ml={ "150px"} mt="100px" mr="20px" color='white'>
          <Box {...bgStyle} p="35px" h={"350px"}>
          
            <Heading bg={"none"} color={"white"} fontSize="40px" mb={"10px"}>Try for free</Heading>
            <Text bg={"none"} color={"white"}  lineHeight={"1.4"} mb={ "10px"}>Get this course plus top-rated picks in tech skills and other popular topics.</Text>
            <Button mb={ "10px"} bgImage={"linear-gradient(to right,#f05a28,#ec008c,#f05a28)"} w={"100%"} h={ "70px"}>
                   <Center bg={"none"} fontSize={"25px"}>
                <a href='#' bg={"none"} color={"white"}> GET STARTED</a>
                </Center>
             
            </Button>
            <Center bg={"none"}>  <Text bg={"none"} color={"white"}>₹ 1,499 per month after 10 day trial</Text></Center>
             
  </Box>
  <Box {...bgStyle} pl="35px"  pt="40px"  h={ "200px"}>
            <Text  bg={"none"}>Your 10 day Standard free trial includes</Text>
            <Flex mt={"30px"} lineHeight={1.4} gap={5} bg={"none"}>
              <Image bg={"none"}  src='https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/browse/pink-icons/courses-icon.png'></Image>
              <Text bg={"none"}>Keep up with the pace of change with thousands of expert-led, in-depth courses.</Text>
            </Flex>
    
  </Box>
   <Box pl="35px"  pt="40px"  fontWeight="strong" {...bgStyle}  h={ "200px"}>
            <Heading bg={"none"} as={"h3"}>For teams</Heading>
            <Text bg={"none"}><strong style={{ color: "red",background:"none"}}> Give up to 10 users</strong> access to our full library</Text>
            <Text bg={"none"}>including this course <strong> free for 14 days</strong></Text>
  </Box>
        </Flex>
        <Box pr={"20px"} fontSize={"30px"}  ml={ "150px"} mt="100px" color={"white"}>
          <Heading as={"h2"}>Course Info</Heading>
          <Flex p={"20px"} justifyContent={"space-between"}>
            <Text fontSize={"30px"}>Rating</Text>
            <span style={{color:"red"}}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              <i class="fa fa-star-half"></i>
              <span style={{marginLeft:"5px",color:"white"}}>(504)</span>
            </span>
          </Flex>
          <Flex p={"20px"} justifyContent={"space-between"}>
            <Text fontSize={"30px"}>Level</Text>
            <Flex gap={5} justifyContent={ "flex-end"}>
              <Text>Intermediate</Text>
              <Image h={ "60%"} src='https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course/level.png'></Image>
            </Flex>
            
          </Flex>
          <Flex p={"20px"} justifyContent={"space-between"}>
            <Text fontSize={"30px"}>Updated</Text>
            <Flex gap={5} justifyContent={"flex-end"}>
            <Text>
                Dec 24, 2014 </Text>
              <Image h={ "60%"} src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course/calendar.png"></Image>
            </Flex>
            
          </Flex>
          <Flex p={"20px"} justifyContent={"space-between"}>
          <Text fontSize={"30px"}>Duration</Text>
            <Flex gap={5} justifyContent={"flex-end"}>
              <Text>2h 8m </Text>
              <Image h={ "60%"} src='https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course/clock.png'></Image>
              </Flex>
          </Flex>
          
        </Box>
        <Box borderRadius={"20px"} pl="20px" pt= "30px" pb="40px" fontSize={"30px"} ml={"150px"} mt="100px" color={"white"} bgRepeat={"no-repeat"} bgSize={ "cover"} w={"80%"} h={ "500px"} backgroundImage="url('https://www.webassetscdn.com/avira/prod/cache-buster-1560161718/tmp/image-thumbnails/ContentHub/VisualContent/Images/ChvcUsecaseVisual/image-thumb__4350__width480/GettyImages-818435778.jpg')">
          <Image pb={"40px"} bg={"none"} width={ "20%"} src={"https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/skill-iq-logo-white.png"}></Image>
          <Heading bg={"none"} as={"h4"} mb={ "20px"}>Not sure where to start?</Heading>
        <Text bg={"none"}>Know exactly where everyone on your team stands with</Text>
          <Box p={ "7px"} border={"1px solid white"}   w={ "600px"} mt={ "20px"} mb={"10px"} h={"70px"} >
             <Center >
              <a href='#' bg={ "none"}  color={"white"}> ASSESMENTS AND ANALYTICS</a>
             </Center>
     </Box>
          </Box>

        <Box mt={"70px"} >
          <Heading mb={ "25px"} as={"h2"}>What you'll learn</Heading>
          <Text>Agile practices often sound great on paper, but quickly lose their luster once you try to apply them in the real world. This course will show you how to take the best of Agile methodologies and apply them to your own team in a way that actually makes sense. Rather than focus on the theory of how agile works in a vacuum, the techniques taught in this course are based on the most common places where agile breaks down in reality and the concrete strategies to fix them.</Text>
        </Box>
        <Box>
          <Heading mt={"70px"} mb={ "25px"} as={"h2"}>Table of contents</Heading>
          <Box fontSize={"30px"}>
          <Accordion border={"none"} fontSize={"30px"} allowToggle>
  <AccordionItem border={"none"} fontSize={"30px"}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"25px"}>
        Bending Agile to Fit Your Team
16mins
        </Box>
        <AccordionIcon fontSize={"40px"}/>
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"20px"}>
      <ul >
    <li> <a href=""> Agile From 10,000 Feet 2m</a></li>
    <li> <a href=""> Incremental or Iterative 3m</a></li>
    <li> <a href="">  A Lesson From Book Publishing 3m</a></li>
    <li> <a href=""> Shipping Products Bit by Bit 4m</a></li>
    <li> <a href="">  Finding the Agile That Works for You 4m</a></li>
   </ul>
    </AccordionPanel>
  </AccordionItem>
              <Spacer gap={ 1}></Spacer>
  <AccordionItem  border={"none"}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"25px"}>
        Help! My Product Owner is MIA!
24mins
        </Box>
        <AccordionIcon fontSize={"40px"} />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"20px"} pb={4}>
    <ul>
    <li> <a href=""> Agile From 10,000 Feet 2m</a></li>
    <li> <a href=""> Incremental or Iterative 3m</a></li>
    <li> <a href="">  A Lesson From Book Publishing 3m</a></li>
    <li> <a href=""> Shipping Products Bit by Bit 4m</a></li>
    <li> <a href="">  Finding the Agile That Works for You 4m</a></li>
   </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem border={"none"}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"25px"}>
        Meeting Hard Deadlines While Staying Agile
22mins
        </Box>
        <AccordionIcon fontSize={"40px"} />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"20px"} pb={4}>
    <ul>
    <li> <a href=""> Agile From 10,000 Feet 2m</a></li>
    <li> <a href=""> Incremental or Iterative 3m</a></li>
    <li> <a href="">  A Lesson From Book Publishing 3m</a></li>
    <li> <a href=""> Shipping Products Bit by Bit 4m</a></li>
    <li> <a href="">  Finding the Agile That Works for You 4m</a></li>
   </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem border={"none"}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"25px"}>
        Squashing Bugs While Keeping Up with New Development
22mins
        </Box>
        <AccordionIcon fontSize={"40px"} />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"20px"} pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem border={"none"}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"25px"}>
        Scaling Agile Across Multiple Teams
29mins
        </Box>
        <AccordionIcon fontSize={"40px"} />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"20px"} pb={4}>
    <ul>
    <li> <a href=""> Agile From 10,000 Feet 2m</a></li>
    <li> <a href=""> Incremental or Iterative 3m</a></li>
    <li> <a href="">  A Lesson From Book Publishing 3m</a></li>
    <li> <a href=""> Shipping Products Bit by Bit 4m</a></li>
    <li> <a href="">  Finding the Agile That Works for You 4m</a></li>
   </ul>
    </AccordionPanel>
              </AccordionItem>
              <Spacer></Spacer>
  <AccordionItem border={"none"}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"25px"}>
        Keeping Teams in Sync
17mins
        </Box>
        <AccordionIcon fontSize={"40px"} />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"20px"} pb={4}>
    <ul>
    <li> <a href=""> Agile From 10,000 Feet 2m</a></li>
    <li> <a href=""> Incremental or Iterative 3m</a></li>
    <li> <a href="">  A Lesson From Book Publishing 3m</a></li>
    <li> <a href=""> Shipping Products Bit by Bit 4m</a></li>
    <li> <a href="">  Finding the Agile That Works for You 4m</a></li>
   </ul>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
              </Box>
        </Box>
        
        <Box mt={"80px"} color={"white"}>
          <Heading mb={"50px"} as={"h2"}>About the author</Heading>
          <Flex gap={5} mb={ "30px"}>
          <Avatar src={"https://pluralsight.imgix.net/author/lg/db17c8ad-77f3-4b95-bc11-fa21e36a4973.jpg?w=100"} alt={"jeremy jerrel"} mb={2} />
            <Text>Jeremy Jerrel</Text>
        </Flex>
          <Text color={ "white"}>Jeremy Jarrell is an agile coach and author who helps teams get better at doing what they love. He is heavily involved in the technology community, both as a highly rated speaker throughout the United States and as a syndicated author whose articles and videos have appeared on sites such as InfoQ.com, StickyMinds.com, Simple-Talk.com, and ScrumAlliance.org. Jeremy resides in Pittsburgh with his wife and two children and is an avid runner. He loves to discuss all topics related to agile methodologies and can be reached by Twitter at @jeremyjarrell or at his website, www.jeremyjarrell.com.</Text>
        </Box>

        <Box>
          <Flex borderRadius={"10px"} mt={ "30px"} mb={ "30px"} pt={"25px"} pl={ "20px"} pr={ "10px"} h={ "130px"} bgImage={"linear-gradient(to right,#f05a28,#ec008c,#f05a28)"} justifyContent={ "space-between"}>
            <Heading bg={"none"} fontSize={ "60px"} as={"h1"}>Ready to upskill?</Heading>
            <Button h={ "70px"} bg={"black"} mb={ "10px"}  w={"30%"}>
                   <Center bg={"none"} fontSize={"30px"}>
                <a href='#' bg={"none"} color={"white"}> GET STARTED</a>
                </Center>
             
            </Button>
            </Flex>
        </Box>

      </Box> 
  )
}

export default CourseInfo