import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import ExpandedLeaderboardView from "./ExpandedLeaderboardView";

interface LeaderboardViewProps {
  onBack: () => void;
}

const LeaderboardView = ({ onBack }: LeaderboardViewProps) => {
  const [showExpandedView, setShowExpandedView] = useState(false);

  const leaderboardData = [
    { rank: 1, name: "Paul C. Ramos", score: "5075", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 2, name: "Derrick L. Thoman", score: "4985", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 3, name: "Kelsey T. Donovan", score: "4642", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519074/female_market_avatar_sd1pmg.png" },
    { rank: 4, name: "Jack L. Gregory", score: "3874", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 5, name: "Jack L. Gregory", score: "3874", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 6, name: "Jack L. Gregory", score: "3821", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 7, name: "Jack L. Gregory", score: "3874", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 8, name: "Jack L. Gregory", score: "3874", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 9, name: "Jack L. Gregory", score: "3874", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
    { rank: 10, name: "Jack L. Gregory", score: "3874", avatar: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519012/male_market_avatar_bzucqk.png" },
  ];

  const getTrophyIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return "https://res.cloudinary.com/dlqzokzi3/image/upload/v1737098812/bi_trophy-fill_gold_2x_d1dxri.svg";
      case 2:
        return "https://res.cloudinary.com/dlqzokzi3/image/upload/v1737098889/bi_trophy-fill_silver_wo6fg7.svg";
      case 3:
        return "https://res.cloudinary.com/dlqzokzi3/image/upload/v1737098936/bi_trophy-fill_bronze_cwhxsz.svg";
      default:
        return null;
    }
  };

  if (showExpandedView) {
    return <ExpandedLeaderboardView onBack={() => setShowExpandedView(false)} leaderboardData={leaderboardData} />;
  }

  const similarGames = [
    { title: "Mario Cart", image: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496387/mario-mini-games-1132x509_1_mpeiqk.png" },
    { title: "Battle Royale", image: "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496756/history-of-battle-royale-feat_1_sxwbe0.png" },
  ];

  return (
    <div className="min-h-screen bg-uniquest-dark text-white pb-20">
      <div className="flex items-center gap-4 p-4">
        <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={onBack} />
        <h1 className="text-xl font-bold">Leaderboard</h1>
      </div>

      {/* Game Banner */}
      <div className="px-4 mb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496387/mario-mini-games-1132x509_1_mpeiqk.png"
            alt="Super Mario"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold mb-1">Super Mario</h3>
            <p className="text-sm text-gray-300">SYBO Games</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4 mb-6">
        <p className="text-sm text-gray-300 mb-4">
          DASH as fast as you can! DODGE the oncoming trains! Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.
        </p>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-lg py-6">
          Play Game
        </Button>
      </div>

      {/* Leaderboard Section */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Top Players</h2>
        <div>
          {leaderboardData.slice(0, 4).map((player) => (
            <div key={player.rank} className="flex items-center justify-between bg-uniquest-gray rounded-xl p-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-sm relative">
                  {getTrophyIcon(player.rank) ? (
                    <img 
                      src={getTrophyIcon(player.rank)} 
                      alt={`Rank ${player.rank}`}
                      className="w-6 h-6"
                    />
                  ) : (
                    <span className="text-gray-400">{player.rank}</span>
                  )}
                </div>
                <Avatar className="w-10 h-10">
                  <img src={player.avatar} alt={player.name} className="object-cover" />
                </Avatar>
                <span className="font-medium">{player.name}</span>
              </div>
              <span className="font-bold">NGN{player.score}</span>
            </div>
          ))}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-4 text-white bg-uniquest-gray hover:bg-uniquest-gray-light"
          onClick={() => setShowExpandedView(true)}
        >
          See More
        </Button>
      </div>

      {/* Games You May Like */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Games You May Like</h2>
          <Button variant="link" className="text-sm text-gray-400">
            See more
          </Button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {similarGames.map((game, index) => (
            <div key={index} className="flex-shrink-0 w-48 bg-uniquest-gray rounded-xl overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-medium text-sm">{game.title}</h3>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-uniquest-gray-light px-2 py-1 rounded-full">
                    Runner
                  </span>
                  <span className="text-xs bg-uniquest-gray-light px-2 py-1 rounded-full">
                    Arcade
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardView;