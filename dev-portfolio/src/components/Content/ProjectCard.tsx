"use client";
import { Flex, Text, Image, Box, AspectRatio } from "@chakra-ui/react";
import React from "react";

type ProjectCardProps = {
  alignImageRight: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <>
      <Flex
        bgColor={"white"}
        direction={"row"}
        align={"center"}
        marginLeft={"10%"}
        width={"80%"}
        border="2px solid"
        borderColor="gray.200"
        borderRadius={"40px"}
      >
        <Flex>
          <Text w={"50%"} ml={"15px"} mr={"10px"} align={"left"} width={"100%"}>
            At Upstatement, we recently wrapped up a project where one of the
            more notable engineering tasks was implementing global search for a
            large WordPress multisite network. We were tasked with revamping the
            web experience for a college of a large university, and each school
            under this college had its own individual site within the broader
            network.
          </Text>
        </Flex>
        <Flex>
          <AspectRatio
            maxW={"600px"}
            minW={"400px"}
            mt={"10px"}
            mb={"10px"}
            mr={"10px"}
          >
            <Image
              borderRadius={"50px"}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </AspectRatio>
        </Flex>
      </Flex>
    </>
  );
};
export default ProjectCard;
