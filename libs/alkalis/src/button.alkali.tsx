import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const ButtonAlkali = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="text-white text-sm border py-[3px] px-[15px] rounded-xl cursor-pointer"
    >
      {children}
    </motion.button>
  );
};
