import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import RightContent from "./RightContent/RightContent";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiGithub } from "react-icons/si";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <Flex bg={"white"} height={"44px"} padding={"6px 12px"} align={"center"}>
      <Flex align={"center"} onClick={() => router.back()}>
        <ArrowBackIcon
          _hover={{ color: "#7ac4dd" }}
          color={"gray.400"}
          boxSize={"6"}
          w={"35px"}
          mr={2}
        />
      </Flex>
      <Flex align={"center"}>
        <Link
          as={NextLink}
          href={"https://www.linkedin.com/in/lbotelho17/"}
          isExternal
        >
          <Button variant={"solid"}>
            <TiSocialLinkedin style={{ height: "25px", width: "30px" }} />
          </Button>
        </Link>
      </Flex>
      <Flex align={"center"} flexGrow={1}>
        <Link
          as={NextLink}
          href={"https://github.com/lucas-botelho"}
          isExternal
        >
          <Button variant={"solid"}>
            <SiGithub style={{ height: "25px", width: "30px" }} />
          </Button>
        </Link>
      </Flex>
      <RightContent />
    </Flex>
  );
};
export default Navbar;
