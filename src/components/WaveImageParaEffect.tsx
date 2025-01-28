import { motion} from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useVariantContext } from "../context/variantContext";

interface WaveImageParaEffectProp{
  para:  string;
  isOnWaveSection:  boolean;
}

function WaveImageParaEffect({para,isOnWaveSection}:WaveImageParaEffectProp) {
  const {textVariant,paragraphVariant} = useVariantContext();
  const imagesPath:string = `/assets/illustrations/`;
  const [imagesArray,setImagesArray] = useState<string[] | []>([]);

  
  const paraArray =  useMemo(() =>  {
    const limit: number = 1;
    const subArray: string[] = [];
    const newParaArray: string[][] = [];

    para.trim().split(" ").forEach((word) => {
      subArray.push(word);
      if (subArray.length === limit) {
        const tempArr = [...subArray];
        newParaArray.push(tempArr);
        subArray.length = 0;
      }
    });

    return newParaArray;
  },[para]);


  const images = useMemo(() =>{
    return  Array.from({length:  30}).map((_,i) =>  `image${i+1}.avif`)
  },[])
  
  useEffect(() => {
    setImagesArray(images);
  }, [images]);

  return (
    <>
      <div className="waveImageContainer mt-16">
      <motion.h2 initial="initial" animate={isOnWaveSection ?'load' :false} variants={textVariant} className="text-3xl poppins-bold tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">What Makes Me Unique</motion.h2>
      <div className="cursor-pointer">
        <motion.p className="text-justify poppins-regular" initial="initial" animate={isOnWaveSection ?'load' :false} variants={paragraphVariant} >
          {paraArray.length > 0 &&
            paraArray.map((arr: string[], index: number) => {
              const randomPath = Math.floor(Math.random() * imagesArray.length)
              return (
                <span key={`span${index}`} className="relative group">
                {arr.join(" ") + " "}
                <span className="block container w-36 h-24  z-10 overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={imagesPath+imagesArray[randomPath]}
                    alt=""
                    loading="lazy"
                    className="transition-all border-2 object-cover  object-center  border-white translate-y-[100%] group-hover:translate-y-0 duration-300 absolute rounded-md shadow-md w-36 h-24"
                  />
                </span>
              </span>
              )
            })}
        </motion.p>
      </div>
      </div>
    </>
  );
}

export default WaveImageParaEffect;