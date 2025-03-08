import {motion, Variants} from 'framer-motion';
import { useMemo } from 'react';

interface ThreeCardsProps {
  floatingAnimation: Variants;
  imagesArr?:  string[] | [];
}

function ThreeCards({floatingAnimation,imagesArr = []}:ThreeCardsProps) {

  const images:string[] = useMemo(() => {

         if(imagesArr.length < 3){
          const   tempArr = [...imagesArr];
          for(let  i  =  0  ; i   <  3 -  imagesArr.length ; i++){
            const randomNum  = Math.ceil(Math.random() * 30);
            if(tempArr.indexOf(`/assets/illustrations/image${randomNum}.avif`) ==  -1){
              tempArr.push(`/assets/illustrations/image${randomNum}.avif`)
            }
          }
          return  tempArr;
        }
        return imagesArr;
  },[imagesArr]);


  return (
    <motion.div
        className="rightSection md:w-1/2 w-full relative md:h-fit h-72"
         initial="initial"
        animate="load"
        variants={floatingAnimation}
        >
          <motion.div animate="animate" variants={floatingAnimation} className="imagesContainer flex h-full md:relative absolute flex-col md:flex-row items-center md:items-start md:left-0 left-0">
            {/* Individual Images */}
            <div className="imageContainer md:shrink-1 shrink-0 relative md:left-5 -left-6 -rotate-6 hover:z-20 md:hover:rotate-0 md:hover:scale-100 hover:scale-105 transition-all duration-200 border-4 border-white md:w-48 w-64 md:h-60 h-48 cursor-pointer rounded-md shadow-lg overflow-hidden mb-4 md:mb-0">
              <img
                src={images[0]  ?? "https://placehold.co/200x200/png"}
                alt="user photo"
                loading="lazy"
                className="md:w-48 w-64 md:h-60 h-48 rounded-md shadow-md object-cover object-top"
              />
            </div>
            <div className="imageContainer relative md:shrink-1 shrink-0 hover:scale-105 transition-all duration-200 md:z-10 hover:z-20 md:left-0 left-7 md:rotate-0 -rotate-6 md:top-0 -top-[60%] border-4 border-white md:w-48 w-64 md:h-60 h-48 cursor-pointer rounded-md shadow-lg overflow-hidden mb-4 md:mb-0">
              <img
                src={images[1]  ?? "https://placehold.co/200x200/png"}
                alt="user photo"
                loading="lazy"
                className="md:w-48 w-64 md:h-60 h-48 rounded-md shadow-md object-cover object-top"
              />
            </div>
            <div className="imageContainer md:shrink-1 shrink-0 relative md:-left-5 left-20 md:rotate-6 -rotate-6 md:top-0 -top-[120%] hover:z-20 md:hover:rotate-0 md:hover:scale-100 hover:scale-105 transition-all duration-200 border-4 border-white md:w-48 w-64 md:h-60 h-48 cursor-pointer rounded-md md:z-0 z-10 shadow-lg overflow-hidden">
              <img
                src={images[2]  ?? "https://placehold.co/200x200/png"}
                alt="user photo"
                loading="lazy"
                className="md:w-48 w-64 md:h-60 h-48 rounded-md shadow-md object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>
  )
}

export default ThreeCards