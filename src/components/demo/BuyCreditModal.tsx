import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { CreditSuccessModal } from "./CreditSuccessModal";

interface BuyCreditModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BuyCreditModal = ({ isOpen, onOpenChange }: BuyCreditModalProps) => {
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBuyCredit = () => {
    onOpenChange(false);
    setShowSuccess(true);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="bg-uniquest-dark border-uniquest-gray w-full sm:max-w-md p-4">
          <SheetHeader className="relative mb-6">
            <div className="absolute right-0 top-0">
              <button 
                onClick={() => onOpenChange(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493115/badge_dvrzxw.png"
                alt="Buy Credit"
                className="w-6 h-6"
              />
              <SheetTitle className="text-white text-xl">Buy Credit</SheetTitle>
            </div>
          </SheetHeader>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Wallet Balance</p>
              <p className="text-white text-xl font-semibold">₦200,000.00</p>
            </div>

            <div>
              <label className="text-sm text-gray-400">Amount</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₦</span>
                <Input
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-uniquest-gray text-white border-none pl-8"
                />
              </div>
              <p className="text-right text-sm text-gray-400 mt-1">₦12,000</p>
            </div>

            <Button 
              onClick={handleBuyCredit}
              className="w-full bg-white text-black hover:bg-gray-100"
            >
              Buy Credit
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <CreditSuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        amount={amount}
      />
    </>
  );
};

export default BuyCreditModal;