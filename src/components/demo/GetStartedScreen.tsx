import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface GetStartedScreenProps {
  onLoginClick: () => void;
  setCurrentScreen: (screen: "splash" | "getStarted" | "login" | "signup" | "passcode" | "confirmPasscode" | "verification") => void;
}

export const GetStartedScreen = ({ onLoginClick, setCurrentScreen }: GetStartedScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-uniquest-dark to-uniquest-gray relative overflow-hidden">
      {/* Header Text */}
      <div className="absolute top-8 left-0 right-0 px-12 z-20">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Uniquest</h1>
        <p className="text-gray-300 text-lg">
          Your one-stop destination for unique shopping experiences
        </p>
      </div>

      {/* Background Vector */}
      <motion.img
        src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735693801/Vector_1_f8bqg3.png"
        alt="Vector"
        className="absolute bottom-0 left-0 w-full h-[50vh] object-cover"
      />

      {/* Icons Container */}
      <div className="absolute inset-0 flex items-center justify-center mt-32">
        <div className="relative w-full h-[45vh]">
          {/* Shop Icon */}
          <motion.img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735693494/shop_mtifks.png"
            alt="Shop"
            className="absolute w-16 h-16 left-12 top-12"
            animate={{ y: [-10, 10] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          />

          {/* Naira Coin */}
          <motion.img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735693692/Naira_coin_tpuwfs.png"
            alt="Naira"
            className="absolute w-16 h-16 left-1/2 -translate-x-1/2 top-8"
            animate={{ y: [-5, 15] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.8 }}
          />

          {/* Gift Icon */}
          <motion.img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735693570/gift_second_image_njb3ki.png"
            alt="Gift"
            className="absolute w-16 h-16 right-12 top-12"
            animate={{ y: [-10, 10] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          />

          {/* Mallet Icon */}
          <motion.img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735695053/mallet_t03k8s.png"
            alt="Mallet"
            className="absolute w-16 h-16 right-8 top-32"
            animate={{ y: [-8, 12] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.2 }}
          />

          {/* Central Shopping Basket */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735693741/yellow_shopping_basket_hvtym8.png"
              alt="Shopping Basket"
              className="w-48 h-48"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-12 left-0 right-0 px-6 space-y-4 z-20">
        <Button 
          variant="default" 
          className="w-full bg-black text-white py-6 transition-none"
          onClick={onLoginClick}
        >
          Login
        </Button>
        <Button 
          variant="outline" 
          className="w-full bg-white text-black py-6 transition-none"
          onClick={() => setCurrentScreen("signup")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};