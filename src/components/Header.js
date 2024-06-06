import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Box, HStack, IconButton, Stack, VStack, useBreakpointValue } from '@chakra-ui/react';

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

const Header = ({ onShowAbout, onShowBlog }) => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = 'translateY(0)';
      } else {
        headerElement.style.transform = 'translateY(-200px)';
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor, showSection) => (e) => {
    e.preventDefault();
    if (showSection) {
      showSection();
    }
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      width="100%"
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={headerRef}
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="100%" margin="0 auto">
        <Stack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: 'row' }}
        >
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            icon={<FontAwesomeIcon icon={faBars} />}
            onClick={toggleMenu}
            variant="ghost"
            aria-label="Open Menu"
          />
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
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
          <HStack spacing={{ base: 2, md: 8 }} display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}>
            <a href="#about" onClick={handleClick('about', onShowAbout)}>
              About
            </a>
            <a href="#projects" onClick={handleClick('projects')}>
              Projects
            </a>
            <a href="#contactme" onClick={handleClick('contactme')}>
              Contact Me
            </a>
            <a href="#blog" onClick={handleClick('blog', onShowBlog)}>
              Blog
            </a>
          </HStack>
        </Stack>
        {isOpen && (
          <VStack
            spacing={4}
            display={{ base: 'flex', md: 'none' }}
            mt={4}
          >
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
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default Header;
