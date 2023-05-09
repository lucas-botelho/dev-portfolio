import { resumeModalState } from "@/atoms/resumeModalAtom";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type ResumeButtonProps = {};

const ResumeButton: React.FC<ResumeButtonProps> = () => {
  const setAuthModalState = useSetRecoilState(resumeModalState);
  return (
    <>
      <Button
        variant={"outline"}
        height={"35px"}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", sm: "110px" }}
        mr={0}
        onClick={() => setAuthModalState({ isOpen: true })}
      >
        Resume
      </Button>
    </>
  );
};
export default ResumeButton;
