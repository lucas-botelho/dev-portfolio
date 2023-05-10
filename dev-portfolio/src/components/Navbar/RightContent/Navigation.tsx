import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <Link
        _hover={{ textDecoration: "none", color: "#7ac4dd" }}
        textDecor={"none"}
        color={"gray.400"}
        as={NextLink}
        href="/"
        margin={"0px 10px 0px 10px"}
      >
        Who am I?
      </Link>
      <Link
        _hover={{ textDecoration: "none", color: "#7ac4dd" }}
        textDecor={"none"}
        color={"gray.400"}
        as={NextLink}
        href="/projects"
        margin={"0px 10px 0px 10px"}
      >
        My projects
      </Link>
      <Link
        _hover={{ textDecoration: "none", color: "#7ac4dd" }}
        textDecor={"none"}
        color={"gray.400"}
        as={NextLink}
        href="/contacts"
        margin={"0px 10px 0px 10px"}
      >
        Get in touch! <EmailIcon marginBottom={"5px"} />
      </Link>
    </>
  );
};
export default Navigation;
