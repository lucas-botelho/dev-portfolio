import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { resumeModalState } from "@/atoms/resumeModalAtom";
import ResumeHeader from "@/components/Resume/ResumeHeader";
import ResumeSummary from "@/components/Resume/ResumeSummary";
import ResumeEducation from "@/components/Resume/ResumeEducation";
import ResumeWorkExperience from "@/components/Resume/ResumeWorkExperience";

type ResumeModalProps = {};

const ResumeModal: React.FC<ResumeModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(resumeModalState);

  const handleModalClose = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modalState.isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent maxW={"80%"}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex
              direction={"column"}
              align={"flex"}
              justify={"center"}
              width={"90%"}
            >
              <ResumeHeader />
              <ResumeSummary />
              <ResumeWorkExperience />
              <ResumeEducation />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ResumeModal;
