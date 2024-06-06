import { Box, HStack, VStack, Flex, Stack } from '@chakra-ui/react';
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
];
const Footer = () => {
  return (
    <Box as="footer" py={4} backgroundColor="#18181b" color="white" mt="auto">
      <VStack>
        <p>Suivez moi via mes differents comptes reseaux sociaux </p>
        <Stack spacing={4} style={{ fontSize: '2rem' }} direction={['column', 'row']} alignItems="center">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size={['2x', 'lg']} />
            </a>
          ))}
        </Stack>
        <hr style={{ width: '100%', margin: '10px 0' }} /> {/* Séparateur horizontal */}
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
