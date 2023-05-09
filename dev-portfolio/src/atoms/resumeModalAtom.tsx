import { atom } from "recoil";

export interface ResumeModalState {
  isOpen: boolean;
}

const defaultModalState: ResumeModalState = {
  isOpen: false,
};

export const resumeModalState = atom<ResumeModalState>({
  key: "resumeModalState",
  default: defaultModalState,
});
