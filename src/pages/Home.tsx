import { motion } from "framer-motion";
import Typewritter from "../components/Typewritter";
import Button from "../components/Button";
import ThreeCards from "../components/ThreeCards";
import { useContext, useMemo } from "react";
import { useVariantContext } from "../context/variantContext";
import { pageDataContext } from "./Main";

function Home() {
  const  {textVariant,typewriterVariant,paragraphVariant,floatingAnimation} = useVariantContext();
  const  {references,scrollToSectionMethod}   = useContext(pageDataContext);

  const imagePath = `/assets/images/`;

  const images:string[] = useMemo(() => {
    const imageSet = new Set<string>();
  
    while (imageSet.size < 3) {
      const randomNum:number = Math.ceil(Math.random() * 3);
      imageSet.add(`${imagePath}myImage${randomNum}.jpeg`);
    }
  
    return Array.from(imageSet);
  }, [imagePath]);

  return (
    <>
      <div ref={references[0]}>
      {/* Main Heading */}
      <motion.div initial="initial" animate="load" variants={textVariant}>
       <motion.h1 animate="animate"   variants={textVariant} className="text-center text-6xl pb-2 font-bold tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent">
        Hello Welcome To My Website
      </motion.h1>

      </motion.div>

      {/* Main Layout */}
      <div className="twoSectionLayout w-full mx-auto flex justify-center flex-wrap-reverse md:gap-0 gap-12 md:my-20 mt-20 mb-10">
        {/* Left Section */}
        <motion.div
          className="leftSection md:w-1/2 w-[90%] md:pl-12"
          initial="initial"
          animate="load"
          variants={textVariant}
        >
          <motion.h1  initial="initial" animate="load" variants={textVariant} className="text-3xl font-bold mb-2  poppins-semibold ">I Am Harshit Behl</motion.h1>

          {/* Typewriter Animation */}
          <motion.div initial="initial" animate="load" variants={typewriterVariant}>
            <Typewritter />
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            className="md:w-[90%] w-full text-justify text-sm poppins-light"
            initial="initial"
            animate="load"
            variants={paragraphVariant}
          >
            I'm a passionate and versatile web developer with expertise in both frontend and backend
            technologies. With a strong foundation in modern frameworks and a flair for creative
            design, I specialize in building responsive, user-friendly, and SEO-optimized web
            applications.
          </motion.p>

          {/* CTA Button */}
          <div  onClick={() => {scrollToSectionMethod(references[2])}}><Button text="My Creations" /></div>
        </motion.div>

        {/* Right Section with Images */}
        <ThreeCards floatingAnimation={floatingAnimation} imagesArr={images} />
      </div>
      </div>
    </>
  );
}

export default Home;