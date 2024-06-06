import React from "react";
import { Avatar, Box, Flex, Text, color } from '@chakra-ui/react';
import mhdImage2 from '../photo/mhd2.jpeg';

const About = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      padding={8}
      className="contenant"
    >
      <Avatar
        src={mhdImage2}
        boxSize={{ base: '200px', md: '600px' }} // Ajustez cette valeur pour la taille des images selon la taille de l'écran
        name="MHD"
        borderRadius="15px" // Rayon de bordure pour arrondir les coins
        mb={{ base: 4, md: 0 }} // Marge en bas pour les petits écrans
      />
      <Box
        ml={{ md: 8 }} // Marge à gauche pour les écrans moyens et plus
        mt={{ base: 4, md: 0 }} // Marge en haut pour les petits écrans
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text style={{color: 'white'}}>
          Développeur Web Front-End spécialisé dans des technologies telles que HTML, <br />
          CSS, Bootstrap, JavaScript, React pour le Frontend et Node.js pour le Backend. <br />
          J'ai étudié à Codeloccol, la première école nigérienne 100% coding. <br />
          Je suis également certifié par Meta pour leurs cours sur Coursera, <br />
          où j'ai développé des projets concrets en validant leurs 9 modules. <br />
          Je peux utiliser toute cette expérience pour créer des solutions <br />
          pour les entreprises et les particuliers. <br />
          Je suis également blogueur et titulaire d'une licence en Communication.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
