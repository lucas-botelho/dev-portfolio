import { theme } from "@/chakra/theme";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import BrandBorderDivider from "../Dividers/BrandBorderDivider";

const ResumeSummary: React.FC = () => {
  return (
    <>
      <BrandBorderDivider />
      <Flex
        marginTop={"10px"}
        padding={"6px 12px"}
        align={"left"}
        direction={"column"}
      >
        <Text fontSize={"sm"} marginBottom={"3px"}>
          Im a certified Sitecore 10 developer with four years of experience and
          an ongoing Bachelor's degree in Software Engineering.
        </Text>
        <Text fontSize={"sm"} marginBottom={"10px"}>
          My expertise is with Sitecore XP/XM Cloud, C#, .NET framework, and
          NextJs. I'm experienced with Sitecore Helix Architecture, Agile
          methodologies, project management, and version control.
        </Text>
      </Flex>
    </>
  );
};
export default ResumeSummary;
