import { useEffect, useState } from "react";
import {motion } from "framer-motion";
import { useVariantContext } from "../context/variantContext";

interface Tech {
  name: string;
  imageSrc: string;
  description: string;
  level:  number;
}

interface Section {
  name: string;
  techs: Tech[];
}

interface SkillsAndExpertiseProps{
  isOnSkillsSection:  boolean;
}

function SkillsAndExpertise({isOnSkillsSection}:SkillsAndExpertiseProps) {
  const {textVariant,paragraphVariant} = useVariantContext();
  const [skillsAndExpertiseObj,setSkillsAndExpertiseObj] =  useState<Section[] | []>([]);
  const imagePath:string = '/assets/icons/';

  useEffect(() =>  {

    const objArray = [
      {
        name: 'Frontend Development',
        techs: [
          {
            name: 'React',
            imageSrc: imagePath + 'react.svg',
            description: 'A JavaScript library for building user interfaces.',
            level: 60
          },
          {
            name: 'HTML',
            imageSrc: imagePath + 'file-type-html.svg',
            description: 'The standard markup language for web pages.',
            level: 90
          },
          {
            name: 'CSS',
            imageSrc: imagePath + 'css3.svg',
            description: 'Stylesheet language for designing web pages.',
            level: 90
          },
          {
            name: 'JavaScript',
            imageSrc: imagePath + 'javascript-js.svg',
            description: 'A versatile programming language for the web.',
            level: 70
          },
          {
            name: 'Tailwind CSS',
            imageSrc: imagePath + 'tailwind-css.svg',
            description: 'A utility-first CSS framework.',
            level: 70
          },
          {
            name: 'Bootstrap',
            imageSrc: imagePath + 'bootstrap.svg',
            description: 'A popular CSS framework.',
            level: 70
          }
        ]
      },
      {
        name: 'Backend Development',
        techs: [
          {
            name: 'Node.js',
            imageSrc: imagePath + 'node.svg',
            description: 'JavaScript runtime for building scalable network applications.',
            level: 60
          },
          {
            name: 'Express.js',
            imageSrc: imagePath + 'express-original.svg',
            description: 'A minimal and flexible Node.js web application framework.',
            level: 60
          },
          {
            name: 'PHP',
            imageSrc: imagePath + 'php-plain.svg',
            description: 'A popular general-purpose scripting language for web development.',
            level: 70
          },
          {
            name: 'Laravel',
            imageSrc: imagePath + 'laravel.svg',
            description: 'A PHP framework for web artisans.',
            level: 80
          }
        ]
      },
      {
        name: 'Database Management',
        techs: [
          {
            name: 'MongoDB',
            imageSrc: imagePath + 'mongodb.svg',
            description: 'A NoSQL database program.',
            level: 70
          },
          {
            name: 'MySQL',
            imageSrc: imagePath + 'mysql-original-wordmark.svg',
            description: 'A relational database management system.',
            level: 70
          }
        ]
      },
      {
        name: 'Additional Skills',
        techs: [
          {
            name: 'Git',
            imageSrc: imagePath + 'git.svg',
            description: 'A version control system for tracking changes in source code.',
            level: 60
          },
          {
            name: 'GitHub',
            imageSrc: imagePath + 'github-square.svg',
            description: 'A platform for version control and collaboration.',
            level: 60
          },
          {
            name: 'Docker',
            imageSrc: imagePath + 'docker.svg',
            description: 'A platform for containerizing and running applications.',
            level: 60
          },
          {
            name: 'SEO',
            imageSrc: imagePath + 'search-engine.svg',
            description: 'Search engine optimization techniques for better rankings.',
            level: 80
          }
        ]
      }
    ]
    setSkillsAndExpertiseObj(objArray);
  },[]);

  return (
    <>
    <br />
    <motion.h2 initial="initial" animate={isOnSkillsSection ?  'load' :  false} variants={textVariant} className="text-2xl poppins-bold tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">Skills and Expertise</motion.h2>
      <motion.p initial="initial" animate={isOnSkillsSection ?  'load' :  false} variants={paragraphVariant}  className="poppins-regular tracking-wide">I bring a versatile skill set that bridges the gap between design and functionality. Here’s a glimpse of what I can do:</motion.p>
      <div className="technologiesContainer mt-5">

      {skillsAndExpertiseObj.map((obj,index:number)  => (
        <div className="techContainer mb-3" key={`techContainer${index}`}>
        <motion.h3 initial="initial" animate={isOnSkillsSection ?  'load' :  false} variants={textVariant}  className="font-bold">{obj.name}</motion.h3>
          <motion.div initial="initial" animate={isOnSkillsSection ?  'load' :  false} variants={textVariant}   className="techBtns pl-6 mt-2 flex  flex-wrap gap-3 items-center">
            {obj.techs.map((techObj,techIndex) => (
              <div className="techBtn relative" key={`techBtn${techIndex}`}>
              <button className="rounded-md border peer px-2 py-1 bg-gray-800 hover:bg-gray-900 text-white poppins-regular text-sm hover:rounded-full hover:px-6 transition-all duration-200 flex items-center gap-2">
                <img src={techObj.imageSrc} alt="react icon" className="w-5 h-5 object-cover" />
                {techObj.name}
              </button>
              <div className="detail z-10 w-52 absolute border-0 peer-hover:border h-0 overflow-hidden peer-hover:h-fit peer-hover:p-4 poppins-medium bg-white p-0 rounded-md shadow-lg transition-all duration-200 left-1/2 top-1/2 -translate-x-1/2 translate-y-4">
                <p>
                {techObj.description}
                </p>
                <div className="level text-xs  mt-4 flex items-center  gap-2">
                {techObj.level < 70 ? "Intermediate"  :  'Advance'}
                <div
                    className="p-1 border w-32 rounded-full shadow-sm border-gray-300"
                    style={{
                      background: `linear-gradient(to right, #4CAF50 ${techObj.level}%, #e0e0e0 ${techObj.level}%)`,
                    }}
                  />
                </div>
              </div>
            </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
    </>
  )
}

export default SkillsAndExpertise