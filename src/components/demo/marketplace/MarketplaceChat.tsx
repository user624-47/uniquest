import { ArrowLeft, Filter } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { ChatDetail } from "./ChatDetail";

interface MarketplaceChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketplaceChat = ({ isOpen, onClose }: MarketplaceChatProps) => {
  const [selectedChat, setSelectedChat] = useState<any>(null);
  
  const chatData = [
    {
      id: 1,
      product: "RayBan Shades",
      name: "Julian Nelson",
      message: "Hi there! 👋 I saw this ...",
      time: "Today, 12:25",
      avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png",
      price: {
        original: "NGN26,500",
        discounted: "NGN16,500"
      }
    },
    {
      id: 2,
      product: "LG smart TV",
      name: "Marcus Schleifer",
      message: "Hi there! 👋 I saw this ...",
      time: "Today, 12:25",
      avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png"
    },
    {
      id: 3,
      product: "LG smart TV",
      name: "Craig Dias",
      message: "Hi there! 👋 I saw this ...",
      time: "Today, 12:25",
      avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png"
    },
    {
      id: 4,
      product: "LG smart TV",
      name: "Tiana Dias",
      message: "Hi there! 👋 I saw this ...",
      time: "Today, 12:25",
      avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519074/female_market_avatar_sd1pmg.png"
    },
    {
      id: 5,
      product: "LG smart TV",
      name: "Lincoln Lubin",
      message: "Hi there! 👋 I saw this ...",
      time: "Today, 12:25",
      avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png"
    }
  ];

  const handleChatClick = (chat: any) => {
    setSelectedChat(chat);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-uniquest-dark">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-uniquest-gray">
              <div className="flex items-center gap-3">
                <button onClick={onClose}>
                  <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-xl font-semibold text-white">MarketPlace Chat</h2>
              </div>
              <button className="flex items-center gap-2 text-sm text-white">
                <Filter className="w-4 h-4" />
                Sort Chat
              </button>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
              {chatData.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-center gap-3 p-4 border-b border-uniquest-gray hover:bg-uniquest-gray cursor-pointer"
                  onClick={() => handleChatClick(chat)}
                >
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="text-xs text-gray-400">{chat.product}</div>
                    <div className="font-medium text-white">{chat.name}</div>
                    <div className="text-sm text-gray-400">{chat.message}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-xs text-gray-400">{chat.time}</div>
                    <div className="bg-white text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                      5
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <ChatDetail 
        isOpen={!!selectedChat}
        onClose={() => setSelectedChat(null)}
        chat={selectedChat}
      />
    </>
  );
};