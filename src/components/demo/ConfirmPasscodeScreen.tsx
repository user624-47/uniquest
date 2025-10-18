import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ConfirmPasscodeScreen = () => {
  const [passcode, setPasscode] = useState<string[]>([]);
  const navigate = useNavigate();
  
  const handleNumberPress = (number: string) => {
    if (passcode.length < 4) {
      const newPasscode = [...passcode, number];
      setPasscode(newPasscode);
      
      // If passcode is complete, navigate to verification complete
      if (newPasscode.length === 4) {
        setTimeout(() => {
          navigate("/demo/verification-complete");
        }, 500); // Small delay to show the last dot animation
      }
    }
  };

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  };

  const handleFaceId = () => {
    console.log("Face ID triggered");
  };

  const handleCancel = () => {
    console.log("Cancel triggered");
    setPasscode([]);
  };

  return (
    <div className="min-h-screen bg-uniquest-dark flex flex-col items-center px-6 py-12">
      {/* Lock Icon and Title */}
      <div className="mb-12 text-center">
        <img 
          src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735807365/lock_ekoomi.png"
          alt="Lock Icon"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold text-white">Confirm Your Passcode</h1>
      </div>

      {/* Passcode Dots */}
      <div className="flex gap-4 mb-16">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            animate={{ 
              scale: passcode[index] ? [1, 1.2, 1] : 1,
              backgroundColor: passcode[index] ? "rgb(139, 92, 246)" : "transparent"
            }}
            className="w-4 h-4 rounded-full border-2 border-gray-400"
          />
        ))}
      </div>

      {/* Number Pad */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberPress(number.toString())}
            className="w-16 h-16 rounded-full text-white text-2xl font-medium hover:bg-uniquest-gray-light transition-colors"
          >
            {number}
          </button>
        ))}
        <button
          onClick={handleFaceId}
          className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:bg-uniquest-gray-light transition-colors"
        >
          <img 
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735807222/Frame_55914_sdwdeb.png"
            alt="Face ID"
            className="w-8 h-8"
          />
        </button>
        <button
          onClick={() => handleNumberPress("0")}
          className="w-16 h-16 rounded-full text-white text-2xl font-medium hover:bg-uniquest-gray-light transition-colors"
        >
          0
        </button>
        <button
          onClick={handleDelete}
          className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:bg-uniquest-gray-light transition-colors"
        >
          <img 
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735807258/Frame_55914_wyybcl.png"
            alt="Delete"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Cancel Button */}
      <Button
        variant="ghost"
        onClick={handleCancel}
        className="text-gray-400 hover:text-white hover:bg-transparent"
      >
        Cancel
      </Button>
    </div>
  );
};