import { Button } from "@chakra-ui/react";
import React from "react";

type ResumeButtonProps = {};

const ResumeButton: React.FC<ResumeButtonProps> = () => {
  return (
    <>
      <Button
        variant={"outline"}
        height={"35px"}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", sm: "110px" }}
        mr={0}
      >
        Resume
      </Button>
    </>
  );
};
export default ResumeButton;
