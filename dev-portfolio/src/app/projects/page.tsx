import ProjectCard from "@/components/Content/ProjectCard";
import React from "react";

type projectsProps = {};

const projects: React.FC<projectsProps> = () => {
  return (
    <>
      <ProjectCard
        imgSrc={
          "https://img001.prntscr.com/file/img001/pgoGn3ZPSmiHYvUBoe67zg.png"
        }
        projectDescription={
          "The aim of this project was to implement object-oriented design patterns in an app that organizes files based on their date in a folder structure. The app uses various design patterns such as the Singleton, Factory, and Template patterns to efficiently manage file organization. In addition to the folder structure, the app also provides features such as file sorting, and copying and erasing duplicates, making file management a breeze. "
        }
        title={"File Sorter"}
        gitUrl={"https://github.com/lucas-botelho/FileSorterWinForm"}
      ></ProjectCard>
    </>
  );
};
export default projects;
