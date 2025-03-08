import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVariantContext } from "../context/variantContext";
import { pageDataContext } from "../pages/Main";

function Navbar() {

    const {textVariant,dropdownMenuVariants,dropdownItemVariants,logoVariants} = useVariantContext();
    const {references,currentPage,scrollToSectionMethod}  =  useContext(pageDataContext);

    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);


  return (
    <>
    <nav className="backdrop-blur-md sticky transition-all  duration-200 top-0 z-50 left-0 py-2 shadow-sm">
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-1 md:items-center items-center md:justify-between justify-start sm:items-stretch sm:justify-start">
          <div className="flex items-center gap-2">
            <motion.div
              className="flex shrink-0 items-center"
              initial="initial"
              animate="load"
              whileHover="hover"
              variants={logoVariants}
            >
              <img
                className="cursor-pointer border-gray-700 rounded-full  object-cover"
                width={70}
                height={70}
                src="/assets/images/newLogo.png"
                alt="HB NextGen Tech"
              />
            </motion.div>
              <motion.h1 initial="initial"  animate="load"  variants={textVariant} className="text-md poppins-semibold text-gray-800 " style={{fontStyle: 'italic'}}>HB NextGen-Tech</motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:block">
            <motion.div
              className="flex space-x-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownMenuVariants}
            >
              <motion.div variants={dropdownItemVariants}>
                  <button
                    onClick={()=>{scrollToSectionMethod(references[0])}}
                    className={`rounded-md px-3 py-2 text-sm poppins-medium ${currentPage == 'Home' ? 'text-white bg-gray-800' : 'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                  >
                    Home
                  </button>
                </motion.div>
                <motion.div variants={dropdownItemVariants}>
                  <button
                    onClick={()=>{scrollToSectionMethod(references[1])}}
                    className={`rounded-md px-3 py-2 text-sm poppins-medium ${currentPage == 'About' ? 'text-white bg-gray-800' : 'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                  >
                    About
                  </button>
                </motion.div>
                <motion.div variants={dropdownItemVariants}>
                  <button
                    onClick={()=>{scrollToSectionMethod(references[2])}}
                    className={`rounded-md px-3 py-2 text-sm poppins-medium ${currentPage == 'Projects' ? 'text-white bg-gray-800' : 'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                  >
                    Projects
                  </button>
                </motion.div>
                <motion.div variants={dropdownItemVariants}>
                  <button
                    onClick={()=>{scrollToSectionMethod(references[3])}}
                    className={`rounded-md px-3 py-2 text-sm poppins-medium ${currentPage == 'Contact' ? 'text-white bg-gray-800' : 'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                  >
                    Contact
                  </button>
                </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-none focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            <span className="sr-only">Open main menu</span>

            {isDropDownOpen ? (
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    <AnimatePresence>
      {isDropDownOpen && (
        <motion.div
          className="sm:hidden"
          id="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownMenuVariants}
        >
          <div className="space-y-1 px-6 pt-6 pb-3">
            
              <motion.button
                    onClick={() =>{scrollToSectionMethod(references[0])}}
                    className={`block w-full  text-left rounded-md px-3 py-2 text-base poppins-medium ${currentPage == 'Home' ? 'text-white bg-gray-800' :  'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                    variants={dropdownItemVariants}
                  >
                    Home
              </motion.button>
              <motion.button
                    onClick={() =>{scrollToSectionMethod(references[1])}}
                    className={`block w-full  text-left rounded-md px-3 py-2 text-base poppins-medium ${currentPage == 'About' ? 'text-white bg-gray-800' :  'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                    variants={dropdownItemVariants}
                  >
                    About
              </motion.button>
              <motion.button
                    onClick={() =>{scrollToSectionMethod(references[2])}}
                    className={`block w-full  text-left rounded-md px-3 py-2 text-base poppins-medium ${currentPage == 'Projects' ? 'text-white bg-gray-800' :  'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                    variants={dropdownItemVariants}
                  >
                    Projects
              </motion.button>
              <motion.button
                    onClick={() =>{scrollToSectionMethod(references[3])}}
                    className={`block w-full  text-left rounded-md px-3 py-2 text-base poppins-medium ${currentPage == 'Contact' ? 'text-white bg-gray-800' :  'text-gray-800 hover:bg-gray-800 hover:text-white'} transition-all duration-300`}
                    variants={dropdownItemVariants}
                  >
                    Contact
              </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </nav>
    </>
  )
}

export default Navbar
