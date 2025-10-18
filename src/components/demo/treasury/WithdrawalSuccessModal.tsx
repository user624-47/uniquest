import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WithdrawalSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
}

export const WithdrawalSuccessModal = ({ isOpen, onClose, amount }: WithdrawalSuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-uniquest-dark border-none sm:max-w-[400px] text-center p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736498233/order_sent_image_pfbsuh.png"
            alt="Withdrawal Successful"
            className="w-32 h-32 animate-fade-in"
          />
          <h2 className="text-xl font-semibold text-white">Withdrawal Successful</h2>
          <p className="text-gray-400 text-sm">You just made a withdrawal of ₦{amount} to John Doe 123456790 ABC Bank PLC</p>
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