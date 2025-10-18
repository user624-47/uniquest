import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { WithdrawalSuccessModal } from "./WithdrawalSuccessModal";

interface WithdrawalModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WithdrawalModal = ({ isOpen, onOpenChange }: WithdrawalModalProps) => {
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    onOpenChange(false);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setAmount('');
  };

  return (
    <>
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
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521397/pack_of_banknotes_sp35vb.png"
                alt="Withdraw"
                className="w-6 h-6"
              />
              <SheetTitle className="text-white text-xl">Withdraw Fund</SheetTitle>
            </div>
          </SheetHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-uniquest-gray rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-white font-medium">John Doe Akman</p>
                  <p className="text-sm text-gray-400">Kuda Bank | 1234567890</p>
                </div>
                <div className="bg-green-500/20 p-2 rounded-full">
                  <img 
                    src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521397/pack_of_banknotes_sp35vb.png"
                    alt="Bank"
                    className="w-4 h-4"
                  />
                </div>
              </div>
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
            </div>

            <Button 
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-100"
            >
              Withdraw
            </Button>
          </form>
        </SheetContent>
      </Sheet>
      <WithdrawalSuccessModal 
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        amount={amount}
      />
    </>
  );
};

export default WithdrawalModal;