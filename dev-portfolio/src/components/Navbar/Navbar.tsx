import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import RightContent from "./RightContent/RightContent";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <Flex bg={"white"} height={"44px"} padding={"6px 12px"} align={"center"}>
      <Flex align={"center"} onClick={() => router.back()} flexGrow={1}>
        <ArrowBackIcon
          _hover={{ color: "#7ac4dd" }}
          color={"gray.400"}
          boxSize={"6"}
          w={"35px"}
          mr={2}
        />
      </Flex>
      <RightContent />
    </Flex>
  );
};
export default Navbar;
