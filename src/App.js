import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import BlogSection from "./components/BlogSection";
import About from './components/About';

function App() {
  const [showBlogSection, setShowBlogSection] = useState(false);
  const [showAboutSection, setShowAboutSection] = useState(false);

  const handleShowBlogSection = () => {
    setShowBlogSection(true);
  };

  const handleShowAboutSection = () => {
    setShowAboutSection(true);
  };

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header onShowAbout={handleShowAboutSection} onShowBlog={handleShowBlogSection} />
          <div id="landing-section"><LandingSection /></div>
          <div id="about-section"><About /></div>
          <div id="projects-section"><ProjectsSection /></div>
          <div id="blog-section"><BlogSection /></div> {/* Déplacez cette ligne ici */}
          <div id="contactme-section"><ContactMeSection /></div>
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
