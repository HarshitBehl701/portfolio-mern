import {createContext, useCallback, useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from "./Contact";

export  const pageDataContext  =   createContext({}  as  pageDataContextProp);

interface pageDataContextProp{
  references: React.RefObject<HTMLDivElement>[];
  currentPage: string;
  scrollToSectionMethod: (sectionRef:  React.RefObject<HTMLDivElement>) => void;
}

function Main() {

    const home = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);
    const contact = useRef<HTMLDivElement>(null);
     const  [currentPage,setCurrentPage] = useState<string>("Home");

    const handleScroll = useCallback(() =>{
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    
        if (home.current && about.current && projects.current && contact.current) {
          const homeHeight = home.current.getBoundingClientRect().height;
          const aboutHeight = about.current.getBoundingClientRect().height;
          const projectsHeight = projects.current.getBoundingClientRect().height;
  
          // Set current page based on scroll position
          if (scroll < homeHeight) {
            setCurrentPage("Home");
          } else if (scroll >= homeHeight && scroll < homeHeight + aboutHeight) {
            setCurrentPage("About");
          } else if (scroll >= homeHeight + aboutHeight && scroll < homeHeight + aboutHeight + projectsHeight) {
            setCurrentPage("Projects");
          } else if (scroll >= homeHeight + aboutHeight + projectsHeight) {
            setCurrentPage("Contact");
          }
        }
    },[]);
  
    useEffect(() => {
      // Attach scroll event listener
      document.body.addEventListener("scroll", handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        document.body.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll]);

    const scrollToSection = (sectionRef:  React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <>
      <pageDataContext.Provider value={{references:[home,about,projects,contact],currentPage:currentPage,scrollToSectionMethod:scrollToSection}}>
          <Navbar />
              <div className="mainContainer   min-h-[74vh] px-8 py-12">

              <Home />
              
              <About />

              <Projects  />

              <Contact />

            </div>
          <Footer  />
      </pageDataContext.Provider>
    </>
  );
}

export default Main;