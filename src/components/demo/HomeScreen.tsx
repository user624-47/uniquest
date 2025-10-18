import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NotificationPanel } from "./NotificationPanel";
import { CartPanel } from "./CartPanel";
import { Heart } from "lucide-react";
import BuyCreditModal from "./BuyCreditModal";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBuyCreditOpen, setIsBuyCreditOpen] = useState(false);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-uniquest-dark text-foreground">
      <header className="p-4 flex items-center justify-between bg-uniquest-dark border-b border-uniquest-gray">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 cursor-pointer" onClick={() => navigate("/demo/profile")}>
            <img src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736492702/avatar.png" alt="User" />
          </Avatar>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              className="bg-uniquest-gray rounded-full py-2 pl-10 pr-4 w-full text-sm text-white"
            />
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736492770/search-icon.svg"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736537991/cart_icon_begrrf.png"
              alt="Cart"
              className="w-6 h-6"
            />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              10
            </span>
          </div>
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736492998/bell_with_ribbon_uj1u2f.png"
            alt="Notifications"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsNotificationOpen(true)}
          />
        </div>
      </header>

      <main className="p-4 space-y-6 bg-uniquest-dark">
        <div className="bg-uniquest-gray text-white rounded-xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493072/your_rank_fftvp3.png"
              alt="Rank"
              className="w-12 h-12"
            />
            <div>
              <p className="text-sm text-muted-foreground">Your Game Credit</p>
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493115/badge_dvrzxw.png"
                  alt="Credits"
                  className="w-5 h-5"
                />
                <span className="font-semibold">200,000.00</span>
              </div>
            </div>
          </div>
          <Button 
            className="w-full dark:bg-white dark:text-black bg-black text-white hover:bg-black/90 dark:hover:bg-white/90"
            onClick={() => setIsBuyCreditOpen(true)}
          >
            Buy Credit
          </Button>
        </div>

        {/* Games Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg flex items-center gap-2 text-white">
              Top Games
              <span className="text-orange-500">🔥</span>
            </h2>
            <button className="text-sm text-muted-foreground hover:text-foreground">See more</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-uniquest-gray text-white rounded-xl p-4">
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496387/mario-mini-games-1132x509_1_mpeiqk.png"
                alt="Mario Cart"
                className="w-full aspect-video object-cover rounded-lg mb-2"
              />
              <p className="font-medium">Mario Cart</p>
            </div>
            <div className="bg-uniquest-gray text-white rounded-xl p-4">
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496756/history-of-battle-royale-feat_1_sxwbe0.png"
                alt="Battle Royale"
                className="w-full aspect-video object-cover rounded-lg mb-2"
              />
              <p className="font-medium">Battle Royale</p>
            </div>
          </div>
        </div>

        {/* Market Place Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg text-white">Market Place</h2>
            <button className="text-sm text-muted-foreground hover:text-foreground">See more</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-uniquest-gray text-white rounded-xl p-3 relative">
                <div className="absolute top-2 right-2 z-10">
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-[#FBC41D] rounded-full"
                    onClick={() => toggleLike(item)}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={likedItems.includes(item) ? "red" : "none"}
                      color="black"
                      strokeWidth={2}
                    />
                  </button>
                </div>
                <img 
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                  alt="Shopping Item"
                  className="w-full aspect-square object-cover rounded-lg mb-2"
                />
                <p className="text-sm font-medium">RayBan Shades t...</p>
                <p className="text-xs text-muted-foreground">NGN5,000</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Services Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg text-white">Top Services</h2>
            <button className="text-sm text-muted-foreground hover:text-foreground">See more</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-uniquest-gray text-white rounded-xl p-3 relative">
                <div className="absolute top-2 right-2 z-10">
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-[#FBC41D] rounded-full"
                    onClick={() => toggleLike(item + 3)}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={likedItems.includes(item + 3) ? "red" : "none"}
                      color="black"
                      strokeWidth={2}
                    />
                  </button>
                </div>
                <img 
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                  alt="Service"
                  className="w-full aspect-square object-cover rounded-lg mb-2"
                />
                <p className="text-sm font-medium">RayBan Shades t...</p>
                <p className="text-xs text-muted-foreground">NGN5,000</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Bids Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg text-white">Top Bids</h2>
            <button className="text-sm text-muted-foreground hover:text-foreground">See more</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-uniquest-gray text-white rounded-xl p-3 relative">
                <div className="absolute top-2 right-2 z-10">
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-[#FBC41D] rounded-full"
                    onClick={() => toggleLike(item + 6)}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={likedItems.includes(item + 6) ? "red" : "none"}
                      color="black"
                      strokeWidth={2}
                    />
                  </button>
                </div>
                <img 
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                  alt="Bid Item"
                  className="w-full aspect-square object-cover rounded-lg mb-2"
                />
                <p className="text-sm font-medium">RayBan Shades t...</p>
                <p className="text-xs text-muted-foreground">NGN5,000</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-uniquest-dark border-t border-uniquest-gray z-50">
        <div className="flex justify-around py-4">
          <button 
            className="flex flex-col items-center text-white font-bold"
            onClick={() => handleNavigation('/demo/home')}
          >
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493886/home_bottomnav_ytui7h.png" 
              alt="Home"
              className="w-6 h-6"
            />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            className="flex flex-col items-center text-gray-400"
            onClick={() => handleNavigation('/demo/treasury')}
          >
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736495778/treasury_pwpfo6.png" 
              alt="Treasury"
              className="w-6 h-6"
            />
            <span className="text-xs mt-1">Treasury</span>
          </button>
          <button 
            className="flex flex-col items-center text-gray-400"
            onClick={() => handleNavigation('/demo/market')}
          >
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736495682/shop_cart_icon_fcvsti.png" 
              alt="Market Place"
              className="w-6 h-6"
            />
            <span className="text-xs mt-1">Market Place</span>
          </button>
          <button 
            className="flex flex-col items-center text-gray-400"
            onClick={() => handleNavigation('/demo/quests')}
          >
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736495761/quest_icon_ybxnkz.png" 
              alt="Quests"
              className="w-6 h-6"
            />
            <span className="text-xs mt-1">Quests</span>
          </button>
        </div>
      </nav>

      {/* Panels */}
      <NotificationPanel 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <BuyCreditModal
        isOpen={isBuyCreditOpen}
        onOpenChange={setIsBuyCreditOpen}
      />
    </div>
  );
};