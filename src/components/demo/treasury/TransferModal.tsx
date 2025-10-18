import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import PaymentSummaryModal from './PaymentSummaryModal';

interface TransferModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const TransferModal = ({ isOpen, onOpenChange }: TransferModalProps) => {
  const [formData, setFormData] = useState({
    user: '',
    amount: '',
    narration: ''
  });
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="bg-uniquest-dark border-uniquest-gray w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="text-white flex items-center gap-2">
              <Send className="w-6 h-6 text-blue-500" />
              Transfer
            </SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label htmlFor="user" className="text-sm text-gray-400">User</label>
              <Input
                id="user"
                placeholder="@user.tag"
                className="bg-uniquest-gray text-white border-none mt-1"
                value={formData.user}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="amount" className="text-sm text-gray-400">Amount</label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter Amount"
                className="bg-uniquest-gray text-white border-none mt-1"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="narration" className="text-sm text-gray-400">Narration</label>
              <Input
                id="narration"
                placeholder="Enter Narration"
                className="bg-uniquest-gray text-white border-none mt-1"
                value={formData.narration}
                onChange={handleInputChange}
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-100"
            >
              Send
            </Button>
          </form>
        </SheetContent>
      </Sheet>
      <PaymentSummaryModal 
        isOpen={showSummary} 
        onOpenChange={setShowSummary}
        paymentDetails={formData}
      />
    </>
  );
};

export default TransferModal;