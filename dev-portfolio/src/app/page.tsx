"use client";
import { Flex, Text, Image, Spacer } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex
        direction={"row"}
        margin={"10px 0px 10px 0px"}
        bgColor={"white"}
        align={"center"}
        marginLeft={"10%"}
        width={"80%"}
        border="2px solid"
        borderColor="gray.200"
        borderRadius={"40px"}
      >
        <Flex marginLeft={"10%"}>
          <Text fontSize={"5xl"}>Lucas Botelho</Text>
        </Flex>
        <Spacer />
        <Flex
          padding={"10px 10px 10px 15px"}
          marginRight={"10%"}
          align={"revert"}
        >
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Flex>
      </Flex>
    </>
  );
}
