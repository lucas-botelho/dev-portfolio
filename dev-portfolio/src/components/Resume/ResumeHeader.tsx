import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import BrandBorderDivider from "../Dividers/BrandBorderDivider";

type ResumeHeaderProps = {};

const ResumeHeader: React.FC<ResumeHeaderProps> = () => {
  return (
    <>
      <BrandBorderDivider />
      <Flex align={"center"} direction={"column"}>
        <Text fontSize={"5xl"} fontWeight={"500"} marginBottom={"10px"}>
          Lucas Botelho
        </Text>
        <Text fontSize={"sm"} marginBottom={"8px"}>
          Lisbon, Portugal
        </Text>
        <Text fontSize={"sm"}>l_botelho@hotmail.com</Text>
      </Flex>
    </>
  );
};
export default ResumeHeader;
