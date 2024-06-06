import { Avatar, Heading, VStack, Text, IconButton } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import mhdImage from '../photo/mhd.jpg'; 

const greeting1 = 'Hello !';
const greeting2 = 'Welcome to my home Je suis Mahamadou Moussa Brah!'
const bio1 = '';
const bio2 = '';
const bio3 = '';

const LandingSection = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#1E1E1F"
    >
      <VStack spacing={16}>
        <VStack spacing={4} alignItems="center">
          <Avatar
            src={mhdImage}
            size="2xl"
            name="Vlad Krasovsky"
          />
          <Heading as="h4" size="md" noOfLines={1}>
            {greeting1}
          </Heading>
          <Heading as="h4" size="md" noOfLines={1}>
            {greeting2}
          </Heading>
        </VStack>
        <VStack spacing={4} alignItems="center">
          <Text fontSize="lg" textAlign="center">
            {bio1}
          </Text>
          <Text fontSize="lg" textAlign="center">
            {bio2}
          </Text>
          <Text fontSize="lg" textAlign="center">
            {bio3}
          </Text>
        </VStack>
        <IconButton
          icon={<FontAwesomeIcon icon={faArrowCircleDown} />}
          size="lg"
          variant="unstyled"
          aria-label="Scroll Down"
          className="scroll-down-icon"
          onClick={handleScrollDown}
        />
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
