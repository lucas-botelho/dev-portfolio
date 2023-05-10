import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import BrandBorderDivider from "../Dividers/BrandBorderDivider";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ResumeTask from "./ResumeTask";

type ResumeWorkExperienceProps = {};

const ResumeWorkExperience: React.FC<ResumeWorkExperienceProps> = () => {
  return (
    <>
      <Flex marginTop={"10px"} align={"center"} direction={"column"}>
        <Text fontSize={"lg"} marginBottom={"10px"}>
          Work Experience
        </Text>
      </Flex>
      <BrandBorderDivider />

      <Flex bg={"white"} marginTop={"10px"} padding={"6px 12px 0px"}>
        <Flex align={"center"} flexGrow={1}>
          Merkle DACH
        </Flex>
        <Flex align={"right"}>
          <Text fontSize={"sm"}>2019 - Ongoing</Text>
        </Flex>
      </Flex>
      <Flex align={"right"} marginTop={"1px"} padding={"0px 12px"}>
        <Text fontSize={"sm"} as={"i"} marginBottom={"3px"}>
          Lisbon, Portugal
        </Text>
      </Flex>

      <Flex marginTop={"10px"} marginBottom={"10px"} direction={"inherit"}>
        <ResumeTask task={"At present working with Sitecore 10.3 version."} />

        <ResumeTask
          task={
            "Extensive working experience with Sitecore XP and XM Cloud projects. Since Sitecore 8.2 version."
          }
        />

        <ResumeTask
          task={
            "Responsible for migrating a Sitecore Solution from version 9 to 10.2 and Asp.Net version from 4.6.2 to 4.7.2. Including the refactoring of major features for the project."
          }
        />
        <ResumeTask
          task={"Experienced with multi-country and multi-site projects."}
        />
        <ResumeTask
          task={
            "Develop pipelines to execute at runtime and resolve the user's context."
          }
        />
        <ResumeTask
          task={
            "Software and coding troubleshooting and resolving issues with existing implementations."
          }
        />
        <ResumeTask
          task={
            "Knowledge of Sitecore marketing features and personalization rules to suit the client's needs."
          }
        />
        <ResumeTask
          task={
            "Develop pipelines to execute at runtime and resolve the user's context."
          }
        />
        <ResumeTask
          task={
            "Provided training and guidance on Sitecore development to other developers."
          }
        />
      </Flex>
    </>
  );
};
export default ResumeWorkExperience;
