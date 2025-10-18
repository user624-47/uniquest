import { FC } from 'react';

interface LeaderboardCardProps {
  onLeaderboardClick: () => void;
}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ onLeaderboardClick }) => {
  return (
    <div className="bg-[#9B87F5] rounded-xl p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496387/mario-mini-games-1132x509_1_mpeiqk.png"
            alt="Super Mario"
            className="w-12 h-12 rounded-lg"
          />
          <span className="font-bold text-lg">Super Mario</span>
        </div>
        <div className="flex flex-col items-end">
          <button
            onClick={onLeaderboardClick}
            className="bg-[#7E69AB] px-4 py-1 rounded-full text-sm hover:bg-[#6A5A91] transition-colors"
          >
            Leaderboard
          </button>
          <span className="text-sm mt-1">October 13 - 18, 2021</span>
        </div>
      </div>

      <div className="flex justify-center gap-8">
        {[
          { rank: 2, name: "Andrew B.", score: "187.01" },
          { rank: 1, name: "Jessica J.", score: "213.75" },
          { rank: 3, name: "Andrew B.", score: "187.01" },
        ].map((player, index) => (
          <div key={index} className="text-center">
            <div className="relative inline-block">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736519074/female_market_avatar_sd1pmg.png"
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold
                ${player.rank === 1 ? 'bg-yellow-400' : player.rank === 2 ? 'bg-gray-300' : 'bg-orange-400'}`}>
                {player.rank}
              </div>
            </div>
            <p className="text-sm mt-2 font-medium">{player.name}</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493115/badge_dvrzxw.png"
                alt="coin"
                className="w-4 h-4"
              />
              <span className="text-sm">{player.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;