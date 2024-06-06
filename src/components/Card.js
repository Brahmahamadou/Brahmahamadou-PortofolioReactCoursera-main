// Card.js
import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";

const Card = ({ title, description, url, imageSrc, height }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      height={height} // Appliquer la hauteur ici
    >
      <Image src={imageSrc} alt={title} width="100%" height="50%" objectFit="cover" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontWeight="bold" fontSize="xl" my="2">
            {title}
          </Text>
        </Box>
        <Text mt="2" fontSize="sm">
          {description}
        </Text>
        <Link href={url} color="teal.500" mt="2" display="block">
          View Project
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
