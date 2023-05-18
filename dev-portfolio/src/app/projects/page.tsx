import ProjectCard from "@/components/Content/ProjectCard";
import React from "react";

type projectsProps = {};

const projects: React.FC<projectsProps> = () => {
  return (
    <>
      <ProjectCard
        imgSrc={
          "https://img001.prntscr.com/file/img001/uV2Y0EeQSfqNt67fCfVZeA.png"
        }
        projectDescription={
          "My Next.js Portfolio. Utilizing Next.js 13, Chakra UI, Recoil, and React Icons, this academic project showcases my ability to learn new technologies and explore my creativity. Seamlessly navigate between pages and enjoy fast loading times thanks to Next.js 13. The polished and user-friendly interface, built with Chakra UI. Recoil ensures efficient state management, while the integration of React Icons adds a touch of visual flair. Explore my portfolio and witness my new interest for front-end development come to life."
        }
        title={"Portfolio"}
        gitUrl={"https://github.com/lucas-botelho/dev-portfolio"}
      />
      <ProjectCard
        imgSrc={
          "https://img001.prntscr.com/file/img001/5AofqXTgSMKifE6WAk1DDA.png"
        }
        projectDescription={
          "A Java console application for an Introduction to Programming class. Place tents strategically on a grid to match numbers at the ends of rows and columns. Sharpen your problem-solving skills and enjoy the immersive gameplay. Conquer increasingly difficult puzzles and enhance your programming proficiency. Dive into the world of strategic tent placement and embrace the thrill of victory."
        }
        title={"Naval Battle: Tent Placement Game"}
        gitUrl={"https://github.com/lucas-botelho/Lusofona_TentGame"}
      />
      <ProjectCard
        imgSrc={
          "https://img001.prntscr.com/file/img001/pgoGn3ZPSmiHYvUBoe67zg.png"
        }
        projectDescription={
          "The aim of this project was to implement object-oriented design patterns in an app that organizes files based on their date in a folder structure. The app uses various design patterns such as the Singleton, Factory, and Template patterns to efficiently manage file organization. In addition to the folder structure, the app also provides features such as file sorting, and copying and erasing duplicates, making file management a breeze. "
        }
        title={"File Sorter"}
        gitUrl={"https://github.com/lucas-botelho/FileSorterWinForm"}
      />
    </>
  );
};
export default projects;
