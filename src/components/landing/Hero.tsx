import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";
import { WishlistForm } from "./WishlistForm";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-uniquest-purple/20 to-transparent opacity-50" />
      
      <div className="container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-uniquest-purple/10 text-uniquest-purple mb-8 animate-fade-in">
              Welcome to the Future of Shopping
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Level Up Your <span className="text-gradient">Shopping</span> Experience
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12">
              Join over 1.2M users who have transformed their shopping experience into an exciting adventure. Earn rewards, compete with friends, and discover unique treasures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Apple className="w-6 h-6" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                className="bg-uniquest-purple hover:bg-uniquest-purple-light text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Smartphone className="w-6 h-6" />
                Download for Android
              </Button>
            </div>

            <WishlistForm />

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-800"
                  />
                ))}
              </div>
              <p className="text-gray-400">
                Join <span className="text-white font-bold">1.2M+</span> happy shoppers
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <img
                src="/lovable-uploads/80c8dd53-5d3a-4edf-a214-09affc31f91b.png"
                alt="UNIQUEST App Interface"
                className="w-full h-full object-cover rounded-3xl glass-card p-2"
              />
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="absolute -bottom-8 -right-8 bg-uniquest-purple/10 backdrop-blur-xl rounded-2xl p-6 max-w-xs glass-card hover:bg-uniquest-purple/20 transition-colors cursor-pointer"
                >
                  <h3 className="font-semibold mb-2">Daily Rewards</h3>
                  <p className="text-sm text-gray-400">
                    Complete daily challenges and earn exclusive rewards
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};