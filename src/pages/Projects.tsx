import { motion } from "framer-motion";
import Project from "../components/Project"
import { useVariantContext } from "../context/variantContext";
import { useContext } from "react";
import { pageDataContext } from "./Main";

type  ProjectsType = {
  name:  string,
  images:  {
    name: string,
    path:  string,
    maxRange:  number,
    extension:  string
  },
  githubLink:  string,
  techStack: {
    frontend: string[],
    backend: string[],
    database:  string[],
    additional: string[],
  };
  aboutProject: string,
}[];

function Projects() {
  const {textVariant}  = useVariantContext();
  const {references,currentPage}  = useContext(pageDataContext);
  const imagesBaseLink  =  '/assets/projects';
  const imagesBaseLinkForLaravelProjects  =  imagesBaseLink +  '/laravelProjects';
  const imagesBaseLinkForMERNProjects  =  imagesBaseLink +  '/mernProjects';

  const projects:ProjectsType = [
      {
        name: 'Scatch(Mern)',
        images:  {
          name: 'image',
          path: imagesBaseLinkForMERNProjects  + '/scatch/images/',
          maxRange: 22,
          extension: '.png'
        },
        githubLink: 'https://github.com/HarshitBehl701/scatch-full-stack',
        techStack: {
          frontend: ['React','Tailwind','Flowbite'],
          backend: ['Nodejs','Expressjs'],
          database:  ['MongoDb','Mongoose'],
          additional: ['Joi','Jwt','Toastify','React Router DOM','Git','GitHub','Docker'],
        },
        aboutProject: 'A platform where users can browse, filter, add products to the cart, create a wishlist, and leave product ratings with comments after orders are placed. The project includes a seller dashboard for product listing and management, a user dashboard with profile editing, and a product search option. Users can view detailed product information, including description, price, comments, ratings, and similar products.',
      },{
        name: 'Scatch(Laravel)',
        images:  {
          name: 'image',
          path: imagesBaseLinkForLaravelProjects  + '/scatch/images/',
          maxRange: 22,
          extension: '.png'
        },
        githubLink: 'https://github.com/HarshitBehl701/scatch-laravel',
        techStack: {
          frontend: ['Laravel','Blade Template','Tailwind'],
          backend: ['PHP','Laravel'],
          database:  ['MySql'],
          additional: ['Git','GitHub'],
        },
        aboutProject: 'A Laravel version of the Scatch Ecommerce website with similar features as the MERN stack project. Users can browse, filter, add products to the cart, create a wishlist, and leave product ratings. The seller dashboard enables product listing and management. Both user and seller dashboards allow profile editing. The product page includes detailed information and a product search feature.',
      },{
        name: 'ChatterBox',
        images:  {
          name: 'image',
          path: imagesBaseLinkForMERNProjects  + '/chatterBox/images/',
          maxRange: 9,
          extension: '.png'
        },
        githubLink: 'https://github.com/HarshitBehl701/ChatterBox',
        techStack: {
          frontend: ['React','Tailwind','Flowbite'],
          backend: ['Nodejs','Expressjs'],
          database:  ['MongoDb','Mongoose'],
          additional: ['Socket.Io','Joi','Jwt','Toastify','React Router DOM','Git','GitHub'],
        },
        aboutProject: 'A chat platform where users can connect with friends, create or join groups, and send emojis. Users can manage their friend lists, send friend requests, and join group requests. Group admins can manage members and group settings, such as adding new members, handling requests, and editing group details. The app also includes profile editing and search options.',
      },
  ];

  return (
    <div className="projects my-8 w-[90%] mx-auto" ref={references[2]}>
        <br />
        <motion.div initial="initial" animate={currentPage   == 'Projects'   ?  "load" : false} variants={textVariant}>
        <motion.h2 animate={currentPage == 'Projects' ?  "animate" :  false}   variants={textVariant} className="text-center text-5xl pb-2 font-bold tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">My Creations</motion.h2>
      </motion.div>
        <div className="projects">
            {projects.map((val) =>  <Project data={val} key={val.name} />)}
        </div>
    </div>
  )
}

export default Projects