import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import BrandBorderDivider from "../Dividers/BrandBorderDivider";

type ResumeWorkExperienceProps = {};

const ResumeWorkExperience: React.FC<ResumeWorkExperienceProps> = () => {
  return (
    <>
      <Flex marginTop={"10px"} align={"center"} direction={"column"}>
        <Text fontSize={"lg"} marginBottom={"10px"}>
          Work Experience
        </Text>
      </Flex>
      <BrandBorderDivider />

      <Flex bg={"white"} marginTop={"10px"} padding={"6px 12px 0px"}>
        <Flex align={"center"} flexGrow={1}>
          Universidade Lusófona
        </Flex>
        <Flex align={"right"}>
          <Text fontSize={"sm"}>2022 - Ongoing</Text>
        </Flex>
      </Flex>
      <Flex align={"right"} marginTop={"1px"} padding={"6px 12px"}>
        <Text fontSize={"sm"} as={"i"} marginBottom={"3px"}>
          Bachelor's Degree in Computer Science
        </Text>
      </Flex>

      <Flex bg={"white"} marginTop={"10px"} padding={"6px 12px 0px"}>
        <Flex align={"center"} flexGrow={1}>
          Solent University
        </Flex>
        <Flex align={"right"}>
          <Text fontSize={"sm"}>2018 - 2019</Text>
        </Flex>
      </Flex>
      <Flex align={"right"} marginTop={"1px"} padding={"6px 12px"}>
        <Text fontSize={"sm"} as={"i"} marginBottom={"3px"}>
          Bachelor's Degree in Computer Science
        </Text>
      </Flex>
    </>
  );
};
export default ResumeWorkExperience;
