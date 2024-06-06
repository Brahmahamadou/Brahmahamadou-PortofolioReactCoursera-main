import { useEffect, useRef, useState } from 'react';
import { IconButton, Stack, useBreakpointValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    // Fermer le menu sur mobile après avoir cliqué sur un lien
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Stack
      position="fixed"
      top={0}
      left={0}
      right={0}
      width="100%"
      px={{ base: 4, md: 16 }}
      py={4}
      bg="#18181b"
      color="white"
      zIndex={1000}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: 'row', md: 'row-reverse' }} // Inverser l'ordre des éléments sur grand écran
      ref={headerRef} 
      align="center" // Centrer verticalement
    >
      {!isMobile && (
        <Stack direction="row" spacing={6} justifyContent="center">
          <a href="#about" onClick={handleClick('about', onShowAbout)} style={{ fontSize: '1.2rem' }}>
            About
          </a>
          <a href="#projects" onClick={handleClick('projects')} style={{ fontSize: '1.2rem' }}>
            Projects
          </a>
          <a href="#contactme" onClick={handleClick('contactme')} style={{ fontSize: '1.2rem' }}>
            Contact Me
          </a>
          <a href="#blog" onClick={handleClick('blog', onShowBlog)} style={{ fontSize: '1.2rem' }}>
            Blog
          </a>
        </Stack>
      )}
      {isMobile && (
        <>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            icon={<FontAwesomeIcon icon={faBars} />}
            onClick={toggleMenu}
            variant="ghost"
            aria-label="Open Menu"
          />
          {isOpen && (
            <Stack direction="column" spacing={4} bg="#18181b" py={4} alignItems="center">
              <a href="#about" onClick={handleClick('about', onShowAbout)} style={{ fontSize: '1.2rem' }}>
                About
              </a>
              <a href="#projects" onClick={handleClick('projects')} style={{ fontSize: '1.2rem' }}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick('contactme')} style={{ fontSize: '1.2rem' }}>
                Contact Me
              </a>
              <a href="#blog" onClick={handleClick('blog', onShowBlog)} style={{ fontSize: '1.2rem' }}>
                Blog
              </a>
            </Stack>
          )}
        </>
      )}
    </Stack>
  );
};

export default Header;
