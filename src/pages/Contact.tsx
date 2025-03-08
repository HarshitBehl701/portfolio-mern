import { motion } from "framer-motion";
import { useVariantContext } from "../context/variantContext";
import { useContext } from "react";
import { pageDataContext } from "./Main";

function Contact() {
    const {textVariant,paragraphVariant,iconAnimationVariant}  = useVariantContext();

    const {references,currentPage} = useContext(pageDataContext);

  return (
    <div className="contactSection md:mt-20  mt-12 mb-12 md:w-[80%]  w-[95%] mx-auto" ref={references[3]}>
        <motion.div initial="initial" animate={currentPage   == 'Contact'   ?  "load" : false} variants={textVariant}>
        <motion.h2 animate={currentPage == 'Contact' ?  "animate" :  false}   variants={textVariant} className="text-center text-5xl pb-2 font-bold tracking-wider oswald-font bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">Contact  Us</motion.h2>
      </motion.div>
        <div className="twoSectionLayout border rounded-lg  md:flex-nowrap  flex-wrap shadow-md md:p-8 p-4 py-8 gap-4 flex mt-8">
            <motion.div  initial="initial" animate={currentPage == 'Contact' ? 'load'  : false}  variants={textVariant} className="leftSection md:w-1/2 w-full md:p-7">
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block poppins-semibold md:text-sm  text-xs text-gray-800">Name</label>
                    <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg  shadow-sm bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block poppins-semibold md:text-sm  text-xs text-gray-800">Email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg   shadow-sm bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block poppins-semibold md:text-sm  text-xs text-gray-800">Message</label>
                    <textarea
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 mt-2 border  resize-none border-gray-300 rounded-lg shadow-sm bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>
                <button
                    type="submit"
                    className="px-3 py-2  hover:rounded-full hover:px-6 transition-all  duration-200 bg-gray-800 text-white poppins-semibold md:text-sm  text-xs rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                    Send Message
                </button>
                </form>
            </motion.div>
            <div className="divider hidden  md:block  border   border-gray-200"></div>
            <div className="rightSection  md:border-t-0 border-t border-gray-200 md:w-1/2 w-full pt-4 md:mt-0  mt-4">
                <motion.h3  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={textVariant}  className="poppins-semibold text-xl tracking-wider  mb-5">Connect With Us</motion.h3>
                <motion.h4   initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={textVariant}  className="poppins-semibold md:text-sm  text-xs">Social  Profiles</motion.h4>
                <ul className="pt-3 pl-4">
                    <li  className="flex items-center gap-2   mb-4">
                        <div className="flex  items-center gap-2">
                            <motion.div  initial="initial" animate={currentPage   ==  'Contact' ? "load" :  false} variants={iconAnimationVariant} className="image w-6 h-6">
                            <img src="/assets/icons/linkedin-original.svg" alt="linkedin" className="w-6 h-6 object-cover object-center"/>
                            </motion.div>
                            <motion.p  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant}  className="poppins-semibold md:text-sm  text-xs">LinkedIn : </motion.p>
                        </div>
                        <motion.a href="https://www.linkedin.com/in/harshit-webdev" target="_blank"  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant} className="md:text-sm  text-xs poppins-regular">/harshit-webdev</motion.a>
                    </li>
                    <li  className="flex items-center gap-2 mb-4">
                        <div className="flex  items-center gap-2">
                        <motion.div  initial="initial" animate={currentPage   ==  'Contact' ? "load" :  false} variants={iconAnimationVariant} className="image w-6 h-6">
                            <img src="/assets/icons/instagram.svg" alt="instagram" className="w-6 h-6 object-cover object-center"/>
                            </motion.div>
                            <motion.p   initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant} className="poppins-semibold md:text-sm  text-xs">Instagram : </motion.p>
                        </div>
                        <motion.a href="https://www.instagram.com/harshitbehl22/" target="_blank"  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant} className="md:text-sm  text-xs poppins-regular">/harshitbehl22/</motion.a>
                    </li>
                </ul>
                <motion.h4  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={textVariant} className="poppins-semibold md:text-sm  text-xs">Repository</motion.h4>
                <ul className="pt-3 pl-4">
                    <li  className="flex items-center gap-2   mb-4">
                        <div className="flex  items-center gap-2">
                        <motion.div  initial="initial" animate={currentPage   ==  'Contact' ? "load" :  false} variants={iconAnimationVariant} className="image w-6 h-6">
                            <img src="/assets/icons/github-square-black.svg" alt="Github" className="w-6 h-6 object-cover object-center"/>
                            </motion.div>
                            <motion.p  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant} className="poppins-semibold md:text-sm  text-xs">GitHub : </motion.p>
                        </div>
                        <motion.a href="https://github.com/HarshitBehl701" target="_blank"  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant} className="md:text-sm  text-xs poppins-regular">/HarshitBehl701</motion.a>
                    </li>
                </ul>
                <motion.h4  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={textVariant} className="poppins-semibold md:text-sm  text-xs">Mail</motion.h4>
                <ul className="pt-3 pl-4">
                <li  className="flex items-center gap-2 mb-4">
                        <div className="flex  items-center gap-2">
                        <motion.div  initial="initial" animate={currentPage   ==  'Contact' ? "load" :  false} variants={iconAnimationVariant} className="image w-6 h-6">
                            <img src="/assets/icons/gmail.svg" alt="Gmail" className="w-6 h-6 object-cover object-center" />
                            </motion.div>
                            <motion.p  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant} className="poppins-semibold md:text-sm  text-xs">Email : </motion.p>
                        </div>
                        <motion.a href="mailto:harshitbehl671@gmail.com"  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={paragraphVariant} className="md:text-sm  text-xs poppins-regular">harshitbehl671@gmail.com</motion.a>
                    </li>
                </ul>
                <motion.h5  initial="initial"  animate={currentPage  ==   'Contact' ?   'load' :  false} variants={textVariant} className="mt-12 text-center  poppins-light-italic md:text-xl">Looking Forward  For Your Response...</motion.h5>
            </div>
        </div>
    </div>
  )
}

export default Contact