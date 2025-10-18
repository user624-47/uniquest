import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface OrderDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDetailsPanel = ({ isOpen, onClose }: OrderDetailsPanelProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-lg p-0 bg-uniquest-dark border-uniquest-gray overflow-y-auto">
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <button onClick={onClose} className="flex items-center text-white gap-2 mb-6">
            <ChevronLeft className="w-5 h-5" />
            <span>Order #123243</span>
          </button>

          {/* Order Item */}
          <div className="space-y-2 mb-6">
            <div className="text-gray-400 text-sm">Item</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                  alt="Product"
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <p className="text-white">RayBan Shade product</p>
                  <div className="flex items-center gap-2">
                    <button className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-600">-</button>
                    <span className="text-white">1</span>
                    <button className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-600">+</button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white">NGN16,500</p>
                <p className="text-gray-400 line-through">NGN20,500</p>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4 mb-6">
            <h3 className="text-white font-medium">Order Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Order Number</p>
                <p className="text-white">Order #123243</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Shipping No.</p>
                <p className="text-white">Shipping No: 01232232</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <p className="text-gray-400 text-sm">Qtys</p>
                <p className="text-white">1</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Sizes</p>
                <p className="text-white">None</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Color</p>
                <p className="text-white">None</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total</p>
                <p className="text-white">NGN16,500</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736497938/opened_envelope_jd1kfb.png"
                alt="Email"
                className="w-6 h-6"
              />
              <div>
                <p className="text-gray-400 text-sm">Email Address</p>
                <p className="text-white">Johndoe@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736498001/front_view_of_yellow_retro_phone_oeb2cp.png"
                alt="Phone"
                className="w-6 h-6"
              />
              <div>
                <p className="text-gray-400 text-sm">Phone Number</p>
                <p className="text-white">+234 7045638577</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736498013/place_marker_prn6sa.png"
                alt="Address"
                className="w-6 h-6"
              />
              <div>
                <p className="text-gray-400 text-sm">Delivery Address</p>
                <p className="text-white">No. 22 Apapure Crescent, Egbeda Lagos</p>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-uniquest-gray rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-400 mb-4">
              This amount will be added to your wallet balance once the delivery is fulfilled.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Shipping Fee</span>
                <span>NGN6,000</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>SubTotal</span>
                <span>NGN41,931</span>
              </div>
              <div className="flex justify-between text-white font-medium">
                <span>Net Total</span>
                <span>NGN41,931</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-white text-black hover:bg-gray-100">
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};