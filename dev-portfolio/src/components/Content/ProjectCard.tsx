"use client";
import { Flex, Text, Image, AspectRatio, Button } from "@chakra-ui/react";
import React from "react";

type ProjectCardProps = {
  imgSrc: string;
  projectDescription: string;
  title: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <>
      <Flex
        margin={"10px 0px 10px 0px"}
        bgColor={"white"}
        direction={"row"}
        align={"center"}
        marginLeft={"10%"}
        width={"80%"}
        border="2px solid"
        borderColor="gray.200"
        borderRadius={"40px"}
      >
        <Flex direction={"column"} align={"center"}>
          <Flex marginBottom={"20px"}>
            <Text
              fontSize="4xl"
              w={"50%"}
              ml={"15px"}
              mr={"10px"}
              align={"left"}
              width={"100%"}
            >
              {props.title}
            </Text>
          </Flex>

          <Flex align={"center"}>
            <Text
              w={"50%"}
              ml={"15px"}
              mr={"10px"}
              align={"left"}
              width={"100%"}
            >
              {props.projectDescription}
            </Text>
          </Flex>
          <Flex bottom={"1px"} left={"32%"} align={"center"}>
            <Button variant={"solid"}>View it on GitHub!</Button>
          </Flex>
        </Flex>

        <Flex>
          <AspectRatio
            w="520px"
            ratio={16 / 9}
            mt={"10px"}
            mb={"15px"}
            mr={"20px"}
          >
            <Image
              shadow={"5px 5px 5px gray"}
              borderRadius={"40px"}
              src={props.imgSrc}
            />
          </AspectRatio>
        </Flex>
      </Flex>
    </>
  );
};
export default ProjectCard;
