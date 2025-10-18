import { motion, AnimatePresence } from "framer-motion";

interface DemoSplashProps {
  isVisible: boolean;
  onAnimationComplete: () => void;
}

export const DemoSplash = ({ isVisible, onAnimationComplete }: DemoSplashProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={onAnimationComplete}
          className="fixed inset-0 z-50 bg-uniquest-dark flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735625456/uniquest_logo_doru4f.png"
                alt="Uniquest Logo"
                className="h-12 w-auto"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 1, 1]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
              />
              <motion.h1
                className="text-white text-2xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Uniquest
              </motion.h1>
              <motion.div
                className="text-gray-400 text-sm font-medium mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                -closed beta-
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};