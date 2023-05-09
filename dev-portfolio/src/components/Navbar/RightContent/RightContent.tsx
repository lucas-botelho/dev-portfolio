import { Flex } from "@chakra-ui/react";
import React from "react";
import ResumeButton from "./ResumeButton";
import ResumeModal from "@/components/Modal/Resume/ResumeModal";

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <ResumeModal />
      <Flex justify={"center"} align={"center"}>
        <ResumeButton />
      </Flex>
    </>
  );
};
export default RightContent;
