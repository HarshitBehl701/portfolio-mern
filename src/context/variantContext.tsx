import { createContext, ReactNode, useContext } from "react";

// Define reusable types for transitions
type Transition = {
  duration: number;
  ease?: string;
  delay?: number;
  repeat?: number;
  staggerChildren?: number;
};

type Variant = {
  opacity?: number;
  scale?: number;
  translateY?: number | string;
  translateX?: number | string;
  rotate?: number;
  height?: string | number;
  x?: number[] | number;
  y?: number[] | number;
  transition?: Transition;
};

// Define the structure of each variant group
interface VariantContextType {
  textVariant: { initial: Variant; load: Variant; animate: Variant };
  typewriterVariant: { initial: Variant; load: Variant };
  paragraphVariant: { initial: Variant; load: Variant };
  floatingAnimation: { initial: Variant; load: Variant; animate: Variant };
  dropdownMenuVariants: { hidden: Variant; visible: Variant; exit: Variant };
  dropdownItemVariants: { hidden: Variant; visible: Variant; exit: Variant };
  logoVariants: { initial: Variant; load: Variant };
  iconAnimationVariant: { initial: Variant; load: Variant };
  buttonVariant: { initial: Variant; load: Variant };
}

// Create the context with default value as undefined
export const VariantContext = createContext<VariantContextType | undefined>(
  undefined
);

// Define the provider props
interface VariantProviderProps {
  children: ReactNode;
}

// Create the provider
export const VariantProvider = ({ children }: VariantProviderProps) => {
  
    const variantsData:VariantContextType = {
        textVariant: {
          initial: { opacity: 0, translateY: 60, scale: 0.8 },
          load: { opacity: 1, translateY: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
          animate: {
            x: [0, -15, 0], // Float up and down
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        },
        typewriterVariant: {
          initial: { opacity: 0, scale: 0.9 },
          load: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
        },
        paragraphVariant: {
          initial: { opacity: 0, translateY: 40 },
          load: { opacity: 1, translateY: 0, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
        },
        floatingAnimation: {
          initial: { translateY: 0, opacity: 0 },
          load: { opacity: 1, translateY: 0, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
          animate: {
            y: [0, -15, 0], // Float up and down
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        },
        dropdownMenuVariants: {
          hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
          visible: { opacity: 1, height: "auto", transition: { duration: 0.4, staggerChildren: 0.1 } },
          exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        },
        dropdownItemVariants: {
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
        },
        logoVariants: {
          initial: { scale: 1, translateX:   -100, rotate: 0 },
          // hover: { scale: 1.1, rotate: 360, transition: { duration: 0.8 } },
          load: { scale: 1.2 ,  translateX: 0,  rotate:  360, transition: { duration: 0.5, ease: "easeOut" } },
        },
        iconAnimationVariant: {
          initial: {opacity:  0},
          load: { opacity: 1, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
        },
        buttonVariant: {
          initial: { opacity: 0, scale: 0.8 },
          load: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } },
        }
      };

  return (
    <VariantContext.Provider value={variantsData}>
      {children}
    </VariantContext.Provider>
  );
};

// Custom hook for consuming the context
export const useVariantContext = (): VariantContextType => {
  const context = useContext(VariantContext);
  if (!context) {
    throw new Error("Context not found. Ensure you are using VariantProvider.");
  }
  return context;
};
