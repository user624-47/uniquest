import { ChevronLeft } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExpandedLeaderboardViewProps {
  onBack: () => void;
  leaderboardData: Array<{
    rank: number;
    name: string;
    score: string;
    avatar: string;
  }>;
}

const ExpandedLeaderboardView = ({ onBack, leaderboardData }: ExpandedLeaderboardViewProps) => {
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

  return (
    <div className="min-h-screen bg-uniquest-dark text-white">
      <div className="flex items-center gap-4 p-4">
        <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={onBack} />
        <h1 className="text-xl font-bold">All Players</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)] px-4">
        {leaderboardData.map((player) => (
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
      </ScrollArea>
    </div>
  );
};

export default ExpandedLeaderboardView;