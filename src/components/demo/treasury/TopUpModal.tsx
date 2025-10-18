import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Copy, X } from "lucide-react";

interface TopUpModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const TopUpModal = ({ isOpen, onOpenChange }: TopUpModalProps) => {
  const accountNumber = "1234567890";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(accountNumber);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="bg-uniquest-dark border-uniquest-gray w-full sm:max-w-md p-4">
        <SheetHeader className="relative">
          <div className="absolute right-0 top-0">
            <button 
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736536621/coin_wallet_ggb4j8.png"
              alt="Top Up"
              className="w-6 h-6"
            />
            <SheetTitle className="text-white text-xl">Top Up</SheetTitle>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="bg-uniquest-gray rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">Your Uniquest Account Number</p>
            <div className="flex items-center justify-between">
              <p className="text-white text-xl font-medium">{accountNumber}</p>
              <button 
                onClick={handleCopyClick}
                className="text-blue-500 hover:text-blue-400"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">ABC Bank</p>
          </div>

          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full bg-white text-black hover:bg-gray-100"
          >
            Share Details
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TopUpModal;