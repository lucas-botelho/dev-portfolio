"use client";
import { Flex, Text, Image, Spacer, Button } from "@chakra-ui/react";

export default function Home() {
  const style3 = {
    transform: "rotate(180deg)",
    color: "#7ac4c2",
    marginTop: "10px",
    marginLeft: "15px",
  };
  return (
    <>
      <Flex
        direction={"column"}
        margin={"10px 0px 10px 0px"}
        bgColor={"white"}
        align={"center"}
        marginLeft={"10%"}
        width={"80%"}
        border="2px solid"
        borderColor="gray.200"
        borderRadius={"40px"}
      >
        <Flex direction={"row"} minW={"100%"} align={"center"}>
          <Text fontSize={"5xl"} marginLeft={"18vw"}>
            Lucas Botelho
          </Text>
          <Spacer />
          <Flex padding={"10px 18vw 10px 15px"} align={"revert"}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://media.licdn.com/dms/image/C4D03AQHTDv00ZE_fFg/profile-displayphoto-shrink_800_800/0/1567180607259?e=1689811200&v=beta&t=o99n3isZKiV1xqgcFtrzZBApcyFwIoF7yzQgfPv-2_M"
              alt="Dan Abramov"
            />
          </Flex>
        </Flex>

        <Flex align={"left"} maxW={"75%"} direction={"column"}>
          <Text fontSize={"xl"} as="b" marginBottom={"10px"} color={"#7ac4c2"}>
            About me
          </Text>
          <Text fontSize={"l"} marginBottom={"10px"}>
            Hello! I'm a passionate Sitecore software developer with 4 years of
            professional experience and an ongoing pursuit of a bachelor's
            degree in software engineering.
          </Text>
          <Text fontSize={"l"} marginBottom={"10px"}>
            Aside from my technical pursuits, I have a deep appreciation for
            craftsmanship. I find joy in solving mechanical issues on vehicles,
            which fuels my curiosity and problem-solving skills in diverse
            domains, allowing me to unleash my creativity while honing my
            attention to detail.
          </Text>
          <Text fontSize={"l"} marginBottom={"10px"}>
            Another aspect of my life that brings me immense joy is traveling.
            With passion for adventure and exploration, I have broadened my
            horizons and instilled a sense of adaptability.
          </Text>
          <Text fontSize={"l"} marginBottom={"10px"}>
            I believe that the combination of my technical expertise,
            problem-solving mindset, and passion for exploration allows me to
            approach software development with an exciting perspective.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
