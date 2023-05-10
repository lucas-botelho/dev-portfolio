import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type ResumeTaskProps = {
  task: String;
};

const ResumeTask: React.FC<ResumeTaskProps> = (props) => {
  return (
    <Flex align={"right"} marginTop={"1px"} padding={"0px 30px"}>
      <ChevronRightIcon marginTop={"4px"} />
      <Text fontSize={"md"} marginBottom={"3px"}>
        {props.task}
      </Text>
    </Flex>
  );
};
export default ResumeTask;
