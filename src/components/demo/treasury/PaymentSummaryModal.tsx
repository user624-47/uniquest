import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { OrderConfirmationModal } from "../OrderConfirmationModal";

interface PaymentSummaryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  paymentDetails: {
    user: string;
    amount: string;
    narration: string;
  };
}

const PaymentSummaryModal = ({ isOpen, onOpenChange, paymentDetails }: PaymentSummaryModalProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSend = () => {
    onOpenChange(false);
    setShowConfirmation(true);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="bg-uniquest-dark border-uniquest-gray w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="text-white">
              Payment Summary
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 bg-uniquest-gray rounded-xl p-4">
            <div className="text-center mb-4">
              <p className="text-2xl font-bold text-white">₦{Number(paymentDetails.amount).toLocaleString()}.00</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Beneficiary Tag</span>
                <span className="text-white">{paymentDetails.user}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Name</span>
                <span className="text-white">John Doe</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Transaction Fee</span>
                <span className="text-white">₦200.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Narration</span>
                <span className="text-white">{paymentDetails.narration}</span>
              </div>
            </div>
          </div>
          <button 
            className="w-full bg-white text-black rounded-lg py-3 mt-6 font-medium hover:bg-gray-100"
            onClick={handleSend}
          >
            Send
          </button>
        </SheetContent>
      </Sheet>

      <OrderConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </>
  );
};

export default PaymentSummaryModal;