import { useNavigate, useLocation } from "react-router-dom";

export const BottomNavigation = ({ onAddClick }: { onAddClick: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-uniquest-dark border-t border-uniquest-gray z-50">
      <div className="flex justify-around py-4">
        <button 
          className={`flex flex-col items-center ${location.pathname === '/demo/home' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => navigate('/demo/home')}
        >
          <img 
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736493886/home_bottomnav_ytui7h.png" 
            alt="Home"
            className="w-6 h-6"
          />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button 
          className={`flex flex-col items-center ${location.pathname === '/demo/treasury' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => navigate('/demo/treasury')}
        >
          <img 
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736495778/treasury_pwpfo6.png" 
            alt="Treasury"
            className="w-6 h-6"
          />
          <span className="text-xs mt-1">Treasury</span>
        </button>
        <button 
          className={`flex flex-col items-center ${location.pathname === '/demo/market' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => navigate('/demo/market')}
        >
          <img 
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736495682/shop_cart_icon_fcvsti.png" 
            alt="Market Place"
            className="w-6 h-6"
          />
          <span className="text-xs mt-1">Market Place</span>
        </button>
        <button 
          className={`flex flex-col items-center ${location.pathname === '/demo/quests' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => navigate('/demo/quests')}
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
  );
};