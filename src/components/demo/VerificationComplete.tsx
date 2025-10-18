import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const VerificationComplete = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/demo/home");
  };

  return (
    <div className="min-h-screen bg-uniquest-dark flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <img
          src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736492347/3_Star_yaujas.png"
          alt="Verification Complete"
          className="w-32 h-32 mb-8 animate-float"
        />
        <h1 className="text-2xl font-semibold text-white mb-4">
          Complete Your Verification Process
        </h1>
        <p className="text-gray-400 mb-8 max-w-sm">
          It's important that you complete this KYC so you can enjoy unlimited special experience
        </p>
        <Button 
          className="w-full bg-white text-black hover:bg-gray-100 mb-4"
          size="lg"
          onClick={handleStartNow}
        >
          Start Now!
        </Button>
        <button className="text-gray-400 hover:text-white transition-colors">
          I will do this later
        </button>
      </motion.div>
    </div>
  );
};