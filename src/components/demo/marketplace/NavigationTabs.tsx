interface NavigationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NavigationTabs = ({ activeTab, setActiveTab }: NavigationTabsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 py-4">
      <button 
        onClick={() => setActiveTab('marketplace')}
        className={`flex items-center gap-2 rounded-full px-6 py-2.5 ${
          activeTab === 'marketplace' ? 'bg-white text-black' : 'bg-uniquest-gray text-white'
        }`}
      >
        <img
          src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736494337/red_shopping_cart_d6c1bn.png"
          alt="Market Place"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium whitespace-nowrap">Market Place</span>
      </button>
      <button 
        onClick={() => setActiveTab('mystore')}
        className={`flex items-center gap-2 rounded-full px-6 py-2.5 ${
          activeTab === 'mystore' ? 'bg-white text-black' : 'bg-uniquest-gray text-white'
        }`}
      >
        <img
          src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736494212/shop_nwwphr.png"
          alt="My Store"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium whitespace-nowrap">My Store</span>
      </button>
      <button 
        onClick={() => setActiveTab('myorders')}
        className={`flex items-center gap-2 rounded-full px-6 py-2.5 ${
          activeTab === 'myorders' ? 'bg-white text-black' : 'bg-uniquest-gray text-white'
        }`}
      >
        <img
          src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736494157/shopping_basket_atqif9.png"
          alt="My Orders"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium whitespace-nowrap">My Orders</span>
      </button>
    </div>
  );
};