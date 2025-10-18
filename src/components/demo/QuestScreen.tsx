import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "./marketplace/BottomNavigation";
import BuyCreditModal from "./BuyCreditModal";
import LeaderboardView from "./LeaderboardView";
import LeaderboardCard from "./LeaderboardCard";

const QuestScreen = () => {
  const [isBuyCreditOpen, setIsBuyCreditOpen] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [activeTab, setActiveTab] = useState("games");
  const [activeCategory, setActiveCategory] = useState("bidpool");
  const [watchlist, setWatchlist] = useState<any[]>([]);

  const handleLeaderboardClick = () => {
    setShowLeaderboard(true);
  };

  const handleAddToWatchlist = (item: any) => {
    setWatchlist(prev => [...prev, item]);
  };

  const handleRemoveFromWatchlist = (itemToRemove: any) => {
    setWatchlist(prev => prev.filter(item => item.title !== itemToRemove.title));
  };

  const biddingItems = [
    {
      title: "Sound Headset",
      image: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png",
      openingBid: "NGN 10,000",
      currentBid: "NGN 9,000",
      timeLeft: "24:10:12:20"
    },
    {
      title: "Sound Headset",
      image: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png",
      openingBid: "NGN 10,000",
      currentBid: "NGN 9,000",
      timeLeft: "24:10:12:20"
    }
  ];

  if (showLeaderboard) {
    return <LeaderboardView onBack={() => setShowLeaderboard(false)} />;
  }

  const renderBiddingContent = () => {
    const displayItems = activeCategory === 'watchlist' ? watchlist : biddingItems;

    return (
    <div className="space-y-6">
      {/* Bid Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <Button 
          variant="outline" 
          className={`whitespace-nowrap ${activeCategory === 'bidpool' ? 'bg-black text-white' : 'bg-[#222222] text-white'}`}
          onClick={() => setActiveCategory('bidpool')}
        >
          Bid Pool
        </Button>
        <Button 
          variant="outline" 
          className={`whitespace-nowrap ${activeCategory === 'watchlist' ? 'bg-black text-white' : 'bg-[#222222] text-white'}`}
          onClick={() => setActiveCategory('watchlist')}
        >
          Watchlist
        </Button>
        <Button 
          variant="outline" 
          className={`whitespace-nowrap ${activeCategory === 'activebids' ? 'bg-black text-white' : 'bg-[#222222] text-white'}`}
          onClick={() => setActiveCategory('activebids')}
        >
          Active Bids
        </Button>
        <Button 
          variant="outline" 
          className={`whitespace-nowrap ${activeCategory === 'mybids' ? 'bg-black text-white' : 'bg-[#222222] text-white'}`}
          onClick={() => setActiveCategory('mybids')}
        >
          My Bids
        </Button>
      </div>

      {/* Points Section */}
      <div className="bg-gradient-to-r from-purple-400 via-green-300 to-yellow-200 p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493115/badge_dvrzxw.png"
            alt="Points"
            className="w-6 h-6"
          />
          <span className="text-black font-medium">Points</span>
          <span className="text-black font-bold">2,000.00</span>
        </div>
        <Button size="sm" variant="default" className="bg-black text-white">
          Get points
        </Button>
      </div>

      {/* Top Bids */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-white">{activeCategory === 'watchlist' ? 'Watchlist' : 'Top Bids'}</h2>
        <div className="grid grid-cols-2 gap-4 pb-6">
          {displayItems.map((item, index) => (
            <div key={index} className="bg-[#222222] rounded-xl overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
              <div className="p-3 space-y-2">
                <h3 className="font-medium text-white">{item.title}</h3>
                <div className="space-y-1 text-xs text-white">
                  <p>Opening Bid: {item.openingBid}</p>
                  <p>Current bid: {item.currentBid}</p>
                  <p>Time: {item.timeLeft}</p>
                </div>
                <Button className="w-full text-sm bg-black text-white">
                  Start Bid
                </Button>
                {activeCategory === 'watchlist' ? (
                  <Button 
                    onClick={() => handleRemoveFromWatchlist(item)}
                    className="w-full text-sm bg-transparent border border-red-500 text-red-500 mt-2"
                  >
                    Remove Watchlist
                  </Button>
                ) : (
                  <Button 
                    onClick={() => handleAddToWatchlist(item)}
                    className="w-full text-sm bg-transparent border border-white text-white mt-2"
                  >
                    Add to Watchlist
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="pb-20">
        <h2 className="text-xl font-bold mb-4 text-white">Category</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Button variant="outline" className="whitespace-nowrap bg-[#222222] text-white">
            Fashion
          </Button>
          <Button variant="outline" className="whitespace-nowrap bg-[#222222] text-white">
            Appliances
          </Button>
          <Button variant="outline" className="whitespace-nowrap bg-[#222222] text-white">
            Toys
          </Button>
          <Button variant="outline" className="whitespace-nowrap bg-[#222222] text-white">
            Students
          </Button>
          <Button variant="outline" className="whitespace-nowrap bg-[#222222] text-white">
            DIY
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {biddingItems.map((item, index) => (
            <div key={index} className="bg-[#222222] rounded-xl overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
              <div className="p-3 space-y-2">
                <h3 className="font-medium text-white">{item.title}</h3>
                <div className="space-y-1 text-xs text-white">
                  <p>Opening Bid: {item.openingBid}</p>
                  <p>Current bid: {item.currentBid}</p>
                  <p>Time: {item.timeLeft}</p>
                </div>
                <Button className="w-full text-sm bg-black text-white">
                  Start Bid
                </Button>
                <Button 
                  onClick={() => handleAddToWatchlist(item)}
                  className="w-full text-sm bg-transparent border border-white text-white mt-2"
                >
                  Add to Watchlist
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )};

  return (
    <div className="min-h-screen bg-uniquest-dark text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6 pt-4">
          <h1 className="text-2xl font-bold">Quest</h1>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736499195/chat_bubbles_bnmdv3.png" 
                alt="Chat"
                className="w-6 h-6"
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736537646/truck_icon_bynotx.png" 
              alt="Delivery"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              activeTab === "games" ? "bg-uniquest-gray" : ""
            }`}
            onClick={() => setActiveTab("games")}
          >
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736537697/Video_Game_pyv8rz.png"
              alt="Games"
              className="w-5 h-5"
            />
            Games
          </button>
          <button
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              activeTab === "bidding" ? "bg-uniquest-gray" : ""
            }`}
            onClick={() => setActiveTab("bidding")}
          >
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736537732/Bellhop_Bell_vmyq2d.png"
              alt="Bidding"
              className="w-5 h-5"
            />
            Bidding
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {activeTab === "games" && (
            <>
              {/* Rank and Credit Section - Only shown in Games tab */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736538475/star_avatar_cbi4qf.png"
                  alt="Rank"
                  className="w-16 h-16 mb-2"
                />
                <h2 className="text-lg font-bold mb-4">Your Rank</h2>
                <div className="flex items-center justify-between bg-uniquest-gray rounded-xl p-4 w-full">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Your Game Credit</span>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493115/badge_dvrzxw.png"
                        alt="Credits"
                        className="w-5 h-5"
                      />
                      <span className="font-medium">200,000.00</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsBuyCreditOpen(true)}
                    className="bg-black text-white hover:bg-gray-900"
                  >
                    Buy Credit
                  </Button>
                </div>
              </div>

              {/* Leaderboard Section */}
              <div className="mb-6">
                <LeaderboardCard onLeaderboardClick={handleLeaderboardClick} />
              </div>

              {/* Top Game Section */}
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Top Game</h2>
                <div className="bg-uniquest-gray rounded-xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496387/mario-mini-games-1132x509_1_mpeiqk.png"
                    alt="Mario Cart"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Mario Cart</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Race through exciting tracks with Mario and friends!
                    </p>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      Play Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Games Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Games</h2>
                  <button className="text-sm text-gray-400">See all</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-uniquest-gray rounded-xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496387/mario-mini-games-1132x509_1_mpeiqk.png"
                      alt="Mario Cart"
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium">Mario Cart</h3>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-uniquest-gray-light px-2 py-1 rounded-full">
                          Racing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-uniquest-gray rounded-xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496756/history-of-battle-royale-feat_1_sxwbe0.png"
                      alt="Battle Royale"
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium">Battle Royale</h3>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-uniquest-gray-light px-2 py-1 rounded-full">
                          Action
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "bidding" && renderBiddingContent()}
        </div>
      </div>

      <BottomNavigation onAddClick={() => {}} />

      <BuyCreditModal
        isOpen={isBuyCreditOpen}
        onOpenChange={setIsBuyCreditOpen}
      />
    </div>
  );
};

export default QuestScreen;
