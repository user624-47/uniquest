import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { DeliveryDetailsPanel } from "./DeliveryDetailsPanel";
import { OrderConfirmationModal } from "./OrderConfirmationModal";

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartPanel = ({ isOpen, onClose }: CartPanelProps) => {
  const [isDeliveryDetailsOpen, setIsDeliveryDetailsOpen] = useState(false);
  const [isOrderConfirmationOpen, setIsOrderConfirmationOpen] = useState(false);

  const handleCheckout = () => {
    onClose();
    setIsDeliveryDetailsOpen(true);
  };

  const handleOrderConfirmation = () => {
    setIsOrderConfirmationOpen(false);
    // You might want to navigate back to home or clear the cart here
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-full sm:max-w-lg bg-uniquest-dark border-uniquest-gray">
          <SheetHeader>
            <SheetTitle className="text-white">Cart</SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-uniquest-gray rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                      alt="Product"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-white font-medium">Samsung 32" Flat Screen</h3>
                      <p className="text-gray-400">NGN16,500</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 bg-uniquest-gray-light"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-white">1</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 bg-uniquest-gray-light"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-red-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-uniquest-dark border-t border-uniquest-gray">
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>NGN100,000.00</span>
              </div>
              <p className="text-xs text-gray-500">Note: That Delivery Fees not included yet</p>
            </div>
            
            <Button 
              className="w-full bg-white text-black hover:bg-gray-100"
              onClick={handleCheckout}
            >
              Checkout NGN49,500.00
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <DeliveryDetailsPanel 
        isOpen={isDeliveryDetailsOpen}
        onClose={() => setIsDeliveryDetailsOpen(false)}
        onOrderComplete={() => {
          setIsDeliveryDetailsOpen(false);
          setIsOrderConfirmationOpen(true);
        }}
      />

      <OrderConfirmationModal
        isOpen={isOrderConfirmationOpen}
        onClose={handleOrderConfirmation}
      />
    </>
  );
};