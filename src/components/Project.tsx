import { motion } from "framer-motion"
import { useVariantContext } from "../context/variantContext";
import { useContext,useState,useEffect } from "react";
import { pageDataContext } from "../pages/Main";

interface ProjectProps{
  data:  {
    name: string,
    images:  {
      name: string,
      path: string,
      maxRange: number,
      extension: string
    },
    githubLink: string,
    techStack: {
      frontend: string[],
      backend: string[],
      database:  string[],
      additional: string[],
    },
    aboutProject: string,
  }
}

function Project({data}: ProjectProps) {
  const {textVariant,paragraphVariant,floatingAnimation} =  useVariantContext();
  const {currentPage}  = useContext(pageDataContext);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.images.maxRange);
      }, 3000);
  
      // Clean up the timer when the component unmounts
      return () => clearInterval(timer);
    }, [data.images.maxRange]);

  return (
    <motion.div  initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={textVariant} className="project  my-12">
      <div className="twoSectionLayout flex relative md:h-64 h-fit flex-col md:flex-row">
        <div className="leftSection  w-full md:w-1/2 md:h-64  h-48 sm:h-44">
          <div className="twoSectionLayout w-full absolute top-0 h-full left-0 flex flex-col md:flex-row">
            <motion.div  initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={floatingAnimation} className="leftSection relative peer cursor-pointer w-full md:w-1/2 flex justify-end md:pr-12 h-fit">
              <motion.div animate={currentPage == 'Projects' ? "animate"  : false} variants={floatingAnimation} className="container md:w-[85%] w-full h-fit  border relative group overflow-hidden">
              <div
                  className="flex transition-all duration-500"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {Array.from({length:  data.images.maxRange}).map((_,index)  => <img
                    src={data.images.path + data.images.name  + (index + 1)+  data.images.extension} 
                    alt="image"
                    key={data.images.name + index}
                    loading="lazy"
                    className="w-full border-4 border-white h-full object-cover rounded-lg shadow-md"
                  />)}
                  </div>
                <div className="name group-hover:h-full transition-all duration-200 flex items-center justify-center w-full h-0 bottom-0 border z-10 absolute  overflow-hidden backdrop-blur-sm"></div>
              </motion.div>
            </motion.div>
            <div className="rightSection z-20 md:w-0 md:h-full  h-0 w-full md:pl-0 overflow-hidden rounded-md peer-hover:border shadow-md  md:peer-hover:w-1/2  peer-hover:h-fit   md:peer-hover:h-full md:peer-hover:pl-4 pl-3 md:pt-2 peer-hover:pt-2 pt-0 bg-white transition-all duration-300">
              <motion.h1 initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={textVariant} className="poppins-semibold tracking-wide text-2xl">Technologies</motion.h1>
              <div className="twoSectionLayout flex md:gap-8 py-6  md:py-0">
                <div className="leftSection md:w-full w-1/2">
                  <motion.h2 initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={textVariant} className="mt-2 mb-1 poppins-semibold tracking-wide">Frontend</motion.h2>
                  {data.techStack.frontend.length  < 6  &&  <ul className="px-10 list-disc text-xs">
                    {data.techStack.frontend.map((name:string) => <li className="poppins-regular" key={name}>{name}</li>)}
                  </ul>}
                  {data.techStack.frontend.length >  5  && <p className="poppins-regular text-xs">
                    {data.techStack.frontend.map((name:string) =>  <span  key={name}>{name}, </span>)}
                  </p>}
                  <motion.h2 initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={textVariant} className="mt-2 mb-1 poppins-semibold tracking-wide">Backend</motion.h2>
                  {data.techStack.backend.length  <  6  && <ul className="px-10 list-disc text-xs">
                    {data.techStack.backend.map((name:string) =>  <li  key={name} className="poppins-regular">{name}</li>)}
                  </ul>}
                  {data.techStack.backend.length >  5  && <p className="poppins-regular text-xs">
                    {data.techStack.backend.map((name:string) =>  <span  key={name}>{name}, </span>)}
                  </p>}
                </div>
                <div className="rightSection border-l md:pl-20 pl-4 border-gray-300 md:w-full w-1/2">
                  <motion.h2 initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={textVariant} className="mt-2 mb-1 poppins-semibold tracking-wide">Database</motion.h2>
                  {data.techStack.database.length < 5 && <ul className="px-10 list-disc text-xs">
                  {data.techStack.database.map((name:string) =>  <li  key={name} className="poppins-regular">{name}</li>)}
                  </ul>}
                  {data.techStack.database.length >  4  && <p className="poppins-regular text-xs">
                    {data.techStack.database.map((name:string) =>  <span  key={name}>{name}, </span>)}
                  </p>}
                  <motion.h2 initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={textVariant} className="mt-2 mb-1 poppins-semibold tracking-wide">Additional</motion.h2>
                  {data.techStack.additional.length < 5 &&  <ul className="px-10 list-disc text-xs">
                  {data.techStack.additional.map((name:string) =>  <li  key={name} className="poppins-regular">{name}</li>)}
                  </ul>}
                  {data.techStack.additional.length >  4  && <p className="poppins-regular text-xs">
                    {data.techStack.additional.map((name:string) =>  <span  key={name}>{name}, </span>)}
                  </p>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSection md:mt-0  mt-8 relative z-10  w-full md:w-1/2">
          <motion.h2  initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={textVariant} className="my-2 text-2xl  poppins-semibold  tracking-wider">{data.name}</motion.h2>
          <motion.p  initial="initial" animate={currentPage == 'Projects' ? "load"  : false} variants={paragraphVariant} className="text-justify  poppins-regular text-sm tracking-wide">
            {data.aboutProject}
          </motion.p>
          <a href={data.githubLink} target="_blank" className="inline-block poppins-regular  text-sm px-2 py-1 rounded-md shadow-md bg-gray-800 hover:bg-gray-900 hover:rounded-full text-white font-semibold hover:px-8 transition-all duration-200 mt-4">
            GitHub Link
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Project