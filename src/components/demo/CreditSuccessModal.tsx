import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CreditSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
}

export const CreditSuccessModal = ({ isOpen, onClose, amount }: CreditSuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-uniquest-dark border-none sm:max-w-[400px] text-center p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736538475/star_avatar_cbi4qf.png"
            alt="Credit Purchased"
            className="w-32 h-32 animate-fade-in"
          />
          <h2 className="text-xl font-semibold text-white">Credit purchased</h2>
          <p className="text-gray-400 text-sm">You just bought {amount || '10,000'} game credit at ₦{Number(amount || '10000').toLocaleString()}</p>
          <Button 
            className="w-full bg-white text-black hover:bg-gray-100"
            onClick={onClose}
          >
            Dismiss
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};