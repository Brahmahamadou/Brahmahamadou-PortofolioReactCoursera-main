import { Box, HStack, VStack, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto:mahamadoubrah672@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/Brahmahamadou',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/mahamadou-moussa-brah-824735267/',
  },
  {
    icon: faTwitter,
    url: 'https://x.com/MahamadouBrah67',
  },
  {
    icon: faFacebook,
    url: 'https://www.facebook.com/mahamadou.moussabrah',
  },
  {
    icon: faPhone,
    number: '+22792004099',
  },
];

const Footer = () => {
  return (
    <Box as="footer" py={4} backgroundColor="#18181b" color="white" mt="auto">
      <VStack>
        <p>Suivez moi via mes differents comptes reseaux sociaux </p>
        <HStack spacing={4}>
          {socials.map((social, index) => (
            social.number ? (
              <HStack key={index} spacing={2}>
                <FontAwesomeIcon icon={social.icon} size="lg" />
                <Box fontSize="xl" color="white">
                  {social.number}
                </Box>
              </HStack>
            ) : (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            )
          ))}
        </HStack>
      </VStack>
      <Flex
        margin="0 auto"
        px={12}
        color="white"
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        height={16}
      >
        <p>Mahamadou Moussa Brah • © 2024</p>
      </Flex>
    </Box>
  );
};

export default Footer;
