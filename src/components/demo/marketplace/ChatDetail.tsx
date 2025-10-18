import { ArrowLeft, Send } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface ChatDetailProps {
  isOpen: boolean;
  onClose: () => void;
  chat?: {
    name: string;
    avatar: string;
    product: string;
    price: {
      original: string;
      discounted: string;
    };
  };
}

export const ChatDetail = ({ isOpen, onClose, chat }: ChatDetailProps) => {
  if (!chat) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-uniquest-dark">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-uniquest-gray">
            <button onClick={onClose}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold text-white">{chat.name}</h2>
              <span className="text-xs text-gray-400">Seller</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex items-center gap-3 p-4 bg-black/30">
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
              alt={chat.product}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-white font-medium">{chat.product}</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">{chat.price.original}</span>
                <span className="text-white font-medium">{chat.price.discounted}</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex gap-2">
              <img src={chat.avatar} alt="" className="w-8 h-8 rounded-full" />
              <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                <p className="text-black">Hi there! 👋 I saw this product from your store here online do you sell in bulk?</p>
                <span className="text-xs text-gray-500 mt-1">11:31 AM</span>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <div className="bg-black rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                <p className="text-white">No, we do not sell in bulk it's per order thanks!</p>
                <span className="text-xs text-gray-500 mt-1">11:31 AM</span>
              </div>
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" 
                alt="" 
                className="w-8 h-8 rounded-full"
              />
            </div>

            <div className="flex gap-2">
              <img src={chat.avatar} alt="" className="w-8 h-8 rounded-full" />
              <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                <p className="text-black">OOPS! Okay no problem</p>
                <span className="text-xs text-gray-500 mt-1">11:31 AM</span>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-uniquest-gray">
            <div className="flex items-center gap-2">
              <button className="text-gray-400">
                <span className="text-2xl">☺</span>
              </button>
              <input
                type="text"
                placeholder="Type a message"
                className="flex-1 bg-uniquest-gray rounded-full px-4 py-2 text-white text-sm"
              />
              <button className="bg-gray-200 p-2 rounded-full">
                <Send className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};