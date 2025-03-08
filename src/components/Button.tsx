import { motion } from "framer-motion";
import { useVariantContext } from "../context/variantContext";

type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {

  const {textVariant,buttonVariant}  = useVariantContext();

  return (
    <motion.button
      className="cta border group w-fit rounded-md px-2 hover:rounded-full hover:px-6 transition-all duration-200 py-1 my-2 poppins-medium text-sm bg-gray-800 hover:bg-gray-900 text-white"
      initial="initial"
      animate="load"
      variants={buttonVariant}
    >
      <motion.span
        variants={textVariant}
      >
        {text}
      </motion.span>
      <motion.span
        className="ml-2 hidden group-hover:inline-block font-semibold group-hover:translate-x-5 -translate-x-5 delay-100 transition-all duration-200"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 5 }}
        transition={{ delay: 0.2 }}
      >
        {'>'}
      </motion.span>
    </motion.button>
  );
}

export default Button;