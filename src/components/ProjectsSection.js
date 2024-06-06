import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "HTML CSS JS",
    description: "J'ai travaillé avec plaisir sur le site web pour Ninetech pour le hackathon en utilisant HTML, CSS et JavaScript. Il s'agissait d'un travail de groupe de cinq personnes dont je faisais partie.",
    url: "https://siteninetech.onrender.com/",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "HTML CSS JS",
    description: "Project Inval",
    url: "https://brahmahamadou.github.io/EnvalIntra-CodeLoccol/",
    getImageSrc: () => require("../images/photo2.png"),
  },
  {
    title: "Project BubdetApp",
    description: "C'est une App qu'elle peut te permettre de gerer te budget",
    url: "https://brahmahamadou.github.io/ProjetBudgetApp/",
    getImageSrc: () => require("../images/photo3.png"),
  },
  {
    title: "Project TodoList",
    description: "C'est une App qui va te permettre de gerer tes taches quotidiens",
    url: "https://brahmahamadou.github.io/ProjetToDoListe/",
    getImageSrc: () => require("../images/photo4.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1E1E1F"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      showScrollIcon={true}
    >
      <Heading as="h1" id="projects-section" color="white">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
