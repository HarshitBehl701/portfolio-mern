import { useCallback, useContext, useEffect, useRef, useState } from "react";
import SkillsAndExpertise from "../components/SkillsAndExpertise";
import ThreeCards from "../components/ThreeCards";
import WaveImageParaEffect from "../components/WaveImageParaEffect";
import { motion } from "framer-motion";
import { useVariantContext } from "../context/variantContext";
import { pageDataContext } from "./Main";

function About() {
  const  {textVariant,paragraphVariant,floatingAnimation} = useVariantContext();
  const {references,currentPage}   = useContext(pageDataContext);
  const firstSection  = useRef<HTMLDivElement |  null>(null);
  const  [isOnSkillsSection,setIsOnSkillsSection] =  useState<boolean>(false);
  const  [isOnWaveSection,setIsOnWaveSection] =  useState<boolean>(false);
  
  const handleScroll =  useCallback(()=>{
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if(firstSection.current){
      const  firstSectionHeight = firstSection.current.getBoundingClientRect().height;
      
      if(scroll >= firstSectionHeight + 200){
        setIsOnSkillsSection(true);
      }
      
      if(scroll >= firstSectionHeight + 700){
        setIsOnWaveSection(true)
      }

    }
  },[])

  useEffect(() => {
    // Attach scroll event listener
    document.body.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); 

  const  waveParaText :string  =  "I bring, more than just technical expertise to the table.My ability to seamlessly integrate creativity with technicality sets me apart in the world of web development. I don’t just build websites; I craft digital experiences that are intuitive, visually appealing, and designed specifically around the end user’s needs and preferences. My proactive communication skills and strong sense of responsibility ensure that every project I workimage on is successful from start to finish. I pride myself on collaborating closely with clients, understanding their vision, and delivering solutions that align perfectly with their business goals. By keeping the process transparent and maintaining open communication, I ensure that the result is always a product that not only meets but exceeds expectations."

  return (
    <>
    <div className="aboutSection w-[90%] mx-auto mb-8"  ref={references[1]}>
    <motion.div initial="initial" animate={currentPage   == 'About'   ?  "load" : false} variants={textVariant}>
        <motion.h2 animate={currentPage == 'About' ?  "animate" :  false}   variants={textVariant} className="text-center text-5xl pb-2 font-bold tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">About</motion.h2>
      </motion.div>
      
      <div className="firstSection"  ref={firstSection}>
        <div className="textContainer poppins-regular tracking-wide text-sm">
          <motion.p initial="initial"  animate={currentPage  == 'About'  ? "load" : false} variants={paragraphVariant} className="text-justify">
          My journey in web development began in  2023 with a strong interest in technology and problem-solving. Over the years, I have honed my skills through formal education, internship, and real-world projects. I thrive on turning complex challenges into seamless and functional solutions that not only meet but exceed expectations.
          </motion.p>
          <motion.h3 className="poppins-bold mt-6 mb-1  text-xl tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent" initial="initial" animate={currentPage   == 'About'   ?  "load" : false} variants={textVariant}>Education and Background</motion.h3>
          <motion.p className="text-justify" initial="initial"  animate={currentPage  == 'About'  ? "load" : false} variants={paragraphVariant}>I completed my schooling in commerce from CBSE in 2022 and am currently pursuing a Bachelor of Computer  Applications from Indira Gandhi  National Open University. Alongside my academic journey, I have dedicated myself to mastering the art of web development through a diploma from GDF Skills. My hands-on experience during my internship as a full-stack developer at IP Innovative Publications allowed me to work on impactful projects like IP Indexing and Khayti Technology, where I gained practical expertise in frameworks such as Laravel and CodeIgniter.</motion.p>
        </div>

        <div className="twoSectionLayout flex flex-wrap-reverse md:gap-0 gap-12 mt-20">
          <div className="leftSection md:w-1/2 w-full">
            <motion.h4 className="text-3xl poppins-bold tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2" initial="initial" animate={currentPage   == 'About'   ?  "load" : false} variants={textVariant}>What Drives Me</motion.h4>
            <motion.p className="text-justify poppins-regular md:w-[90%] w-full" initial="initial"  animate={currentPage  == 'About'  ? "load" : false} variants={paragraphVariant}>At my core, I believe in continuous learning and self-improvement. Each day, I challenge myself to grow both professionally and personally, exploring new tools, frameworks, and methodologies. Whether it’s delving into advanced JavaScript concepts or mastering backend technologies, I am driven by the excitement of discovering innovative ways to solve problems.</motion.p>
          </div>
          <motion.div  className="rightSection  md:w-1/2 w-full" initial="initial"  animate={currentPage  ==  'About'?'load':false} variants={paragraphVariant}><ThreeCards  floatingAnimation={floatingAnimation} /></motion.div>
        </div>
      </div>
        
        <div className="secondSection">
          <SkillsAndExpertise isOnSkillsSection={isOnSkillsSection} />   
          <WaveImageParaEffect para={waveParaText} isOnWaveSection={isOnWaveSection} />
        </div>
      </div>
    </>
  )
}

export default About