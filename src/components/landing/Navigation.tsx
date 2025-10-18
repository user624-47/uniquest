import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/demo');
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-uniquest-dark/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container-padding py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735625456/uniquest_logo_doru4f.png"
              alt="Uniquest Logo"
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-bold text-gradient">UNIQUEST</h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-gray-300 hover:text-white transition-colors">App</a>
            <Button 
              onClick={handleDemoClick}
              className="bg-uniquest-purple hover:bg-uniquest-purple-light"
            >
              Try Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="block text-gray-300 hover:text-white transition-colors">App</a>
            <Button 
              onClick={handleDemoClick}
              className="w-full bg-uniquest-purple hover:bg-uniquest-purple-light"
            >
              Try Demo
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};