import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderConfirmationModal = ({ isOpen, onClose }: OrderConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-uniquest-dark border-none sm:max-w-[400px] text-center p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736498233/order_sent_image_pfbsuh.png"
            alt="Transfer Successful"
            className="w-32 h-32 animate-fade-in"
          />
          <h2 className="text-xl font-semibold text-white">Transfer Successful</h2>
          <p className="text-gray-400 text-sm">You just made a transfer of ₦10,000 to @John Doe</p>
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