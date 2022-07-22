import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const URLlevel = searchParams.getAll("level");
  const URLtype = searchParams.getAll("type");

  const [level, setlevel] = useState(URLlevel || []);
  const [type, settype] = useState(URLtype || null);

  const handleCheckBox = (e) => {
    const option = e.target.value;
    const newlevel = [...level];
    if (newlevel.includes(option)) {
      newlevel.splice(newlevel.indexOf(option), 1);
    } else {
      newlevel.push(option);
    }
    setlevel(newlevel);
  };

  useEffect(() => {
    if (level || type) {
      let params = {};
      level && (params.level = level);
      type && (params.type = type);
      setSearchParams(params);
    }
  }, [level, searchParams, type, setSearchParams]);
  return (
    <Box>
      <Accordion allowMultiple defaultIndex={[0]}>
        <AccordionItem border="none" mt="20px" borderBottom={"1px solid gray"}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px" fontWeight={"bold"}>
                  Ways to learn
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {/* Radio Button */}

            <RadioGroup onChange={settype} value={type}>
              <Stack>
                <Radio value="all" size="lg">
                  All
                </Radio>
                <Radio value="core" onChange={(e) => settype("core")} size="lg">
                  Core Courses
                </Radio>
                <Radio
                  value="expanded"
                  onChange={(e) => settype("expanded")}
                  size="lg"
                >
                  Expanded
                </Radio>
                <Radio value="labs" onChange={(e) => settype("labs")} size="lg">
                  Labs
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        {/* CheckBox */}

        <AccordionItem border="none" mt="20px" borderBottom={"1px solid gray"}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px" fontWeight={"bold"}>
                  Skill Level
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align={"self-start"}>
              <Checkbox
                size="lg"
                colorScheme="white"
                color={"blue"}
                value="beginner"
                onChange={handleCheckBox}
                defaultChecked={level.includes("beginner")}
              >
                Beginner
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="lightBlue"
                color={"blue"}
                value="advanced"
                onChange={handleCheckBox}
                defaultChecked={level.includes("advanced")}
              >
                Advanced
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="white"
                color={"blue"}
                value="intermediate"
                onChange={handleCheckBox}
                defaultChecked={level.includes("intermediate")}
              >
                Intermediate
              </Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="none" mt="20px" borderBottom={"1px solid gray"}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px" fontWeight={"bold"}>
                  Subject
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align={"self-start"}>
              <Checkbox size="lg" colorScheme="white" color={"blue"}>
                Architecture & construction
              </Checkbox>
              <Checkbox size="lg" colorScheme="lightBlue" color={"blue"}>
                Business professional
              </Checkbox>
              <Checkbox size="lg" colorScheme="white" color={"blue"}>
                Creative professional
              </Checkbox>
              <Checkbox size="lg" colorScheme="white" color={"blue"}>
                Data professional
              </Checkbox>
              <Checkbox size="lg" colorScheme="white" color={"blue"}>
                IT ops
              </Checkbox>
              <Checkbox size="lg" colorScheme="white" color={"blue"}>
                Manufacturing & design
              </Checkbox>
              <Checkbox size="lg" colorScheme="white" color={"blue"}>
                Software development
              </Checkbox>
              <Checkbox size="lg" colorScheme="white" color={"blue"}>
                Web development
              </Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Filter;
