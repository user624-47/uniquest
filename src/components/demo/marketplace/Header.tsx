import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MarketplaceChat } from "./MarketplaceChat";

interface HeaderProps {
  setIsCartOpen: (value: boolean) => void;
  setIsNotificationOpen: (value: boolean) => void;
}

export const Header = ({ setIsCartOpen, setIsNotificationOpen }: HeaderProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col bg-uniquest-dark">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-white">Market Place</h1>
        <div className="flex items-center gap-4">
          <button className="relative" onClick={() => setIsChatOpen(true)}>
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736499195/chat_bubbles_bnmdv3.png"
              alt="Chat"
              className="w-6 h-6"
            />
          </button>
          <button>
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736499239/love_circled_owevwr.png"
              alt="Favorites"
              className="w-6 h-6"
            />
          </button>
          <button 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736537991/cart_icon_begrrf.png"
              alt="Cart"
              className="w-6 h-6"
            />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              10
            </span>
          </button>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-uniquest-gray rounded-full py-2 pl-10 pr-4 text-sm text-white"
          />
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736492770/search-icon.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
      </div>

      <MarketplaceChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};