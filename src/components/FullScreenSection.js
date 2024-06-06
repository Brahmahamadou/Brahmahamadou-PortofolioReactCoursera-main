import { Box, VStack } from '@chakra-ui/react';

const FullScreenSection = ({ children, isDarkBackground, backgroundColor, ...rest }) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor}
      color={isDarkBackground ? 'white' : 'black'}
      {...rest}
    >
      <VStack spacing={8} width="full" px={{ base: 4, md: 8 }}>
        {children}
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
