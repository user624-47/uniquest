import { useState } from "react";
import { NotificationPanel } from "./NotificationPanel";
import { CartPanel } from "./CartPanel";
import { ProductDetailsPanel } from "./ProductDetailsPanel";
import { DeliveryDetailsPanel } from "./DeliveryDetailsPanel";
import { OrderDetailsPanel } from "./OrderDetailsPanel";
import { Heart } from "lucide-react";
import { Header } from "./marketplace/Header";
import { NavigationTabs } from "./marketplace/NavigationTabs";
import { BottomNavigation } from "./marketplace/BottomNavigation";
import { AddProduct } from "./marketplace/AddProduct";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const MarketPlace = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const [isDeliveryDetailsOpen, setIsDeliveryDetailsOpen] = useState(false);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Fashion");
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("marketplace");
  const [isStoreSetupOpen, setIsStoreSetupOpen] = useState(false);
  const [storeType, setStoreType] = useState<"products" | "services" | "both" | null>(null);
  const [isStoreCreatedOpen, setIsStoreCreatedOpen] = useState(false);
  const [activeOrderTab, setActiveOrderTab] = useState("New");
  const [showAddProduct, setShowAddProduct] = useState(false);

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleBuyProduct = () => {
    setIsProductDetailsOpen(false);
    setIsDeliveryDetailsOpen(true);
  };

  const handleOrderComplete = () => {
    setIsDeliveryDetailsOpen(false);
    setIsOrderDetailsOpen(true);
  };

  const renderStoreSetupDialog = () => (
    <Dialog open={isStoreSetupOpen} onOpenChange={setIsStoreSetupOpen}>
      <DialogContent className="bg-black text-white border-none p-6 max-w-md mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736516181/shop-add_hlxqc7.svg"
            alt="Setup Store"
            className="w-16 h-16"
          />
          <h2 className="text-2xl font-bold text-center">Set up Store</h2>
          
          <div className="w-full space-y-4">
            <div>
              <label className="block mb-2">Store Name</label>
              <Input
                placeholder="Enter your store name"
                className="bg-transparent border-gray-600 text-white"
              />
            </div>
            
            <div>
              <label className="block mb-2">Address</label>
              <Input
                placeholder="Enter your store address"
                className="bg-transparent border-gray-600 text-white"
              />
            </div>
            
            <div>
              <label className="block mb-2">Description</label>
              <Textarea
                placeholder="Describe your Store"
                className="bg-transparent border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block mb-2">What do you offer?</label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={storeType === "products" ? "default" : "outline"}
                  onClick={() => setStoreType("products")}
                  className={`relative ${
                    storeType === "products" 
                      ? "bg-white text-black" 
                      : "border-gray-600 hover:bg-gray-800"
                  }`}
                >
                  {storeType === "products" && (
                    <span className="absolute left-3">✓</span>
                  )}
                  <span className="ml-4">I sell products</span>
                </Button>
                <Button
                  variant={storeType === "services" ? "default" : "outline"}
                  onClick={() => setStoreType("services")}
                  className={`relative ${
                    storeType === "services" 
                      ? "bg-white text-black" 
                      : "border-gray-600 hover:bg-gray-800"
                  }`}
                >
                  {storeType === "services" && (
                    <span className="absolute left-3">✓</span>
                  )}
                  <span className="ml-4">I render services</span>
                </Button>
                <Button
                  variant={storeType === "both" ? "default" : "outline"}
                  onClick={() => setStoreType("both")}
                  className={`relative col-span-2 ${
                    storeType === "both" 
                      ? "bg-white text-black" 
                      : "border-gray-600 hover:bg-gray-800"
                  }`}
                >
                  {storeType === "both" && (
                    <span className="absolute left-3">✓</span>
                  )}
                  <span className="ml-4">Both</span>
                </Button>
              </div>
            </div>
            
            <Button 
              className="w-full bg-white text-black hover:bg-gray-100"
              onClick={() => {
                setIsStoreSetupOpen(false);
                setIsStoreCreatedOpen(true);
              }}
            >
              Set Up a Store
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderStoreCreatedDialog = () => (
    <Dialog open={isStoreCreatedOpen} onOpenChange={setIsStoreCreatedOpen}>
      <DialogContent className="bg-black text-white border-none p-6 max-w-sm mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div>
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736498233/order_sent_image_pfbsuh.png"
              alt="Store Created"
              className="w-32 h-32 animate-float"
            />
          </div>
          <h2 className="text-xl font-semibold text-white">
            Store Created Successfully
          </h2>
          <Button 
            className="w-full bg-white text-black hover:bg-gray-100"
            onClick={() => setIsStoreCreatedOpen(false)}
          >
            Proceed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderMyStore = () => (
    <div className="flex flex-col items-center justify-center p-8 space-y-6">
      <img
        src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736515525/clothes_image_q1ouri.png"
        alt="Store Setup"
        className="w-64 h-64 object-contain animate-fade-in"
      />
      <Button 
        className="w-full max-w-sm bg-black text-white hover:bg-gray-900"
        onClick={() => setIsStoreSetupOpen(true)}
      >
        Set Up a Store
      </Button>
    </div>
  );

  const renderMarketplace = () => (
    <div className="p-4 space-y-4">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3 text-white">Categories</h3>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
          {["Fashion", "Appliances", "Toys", "Students", "DIY"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 rounded-full text-sm whitespace-nowrap flex-none ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-uniquest-gray text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item} 
            className="bg-black rounded-xl p-3 relative"
            onClick={() => setIsProductDetailsOpen(true)}
          >
            <div className="absolute top-2 right-2 z-10">
              <button 
                className="w-8 h-8 flex items-center justify-center bg-[#FBC41D] rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(item);
                }}
              >
                <Heart
                  className="w-4 h-4"
                  fill={likedItems.includes(item) ? "black" : "none"}
                  color="black"
                />
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
              alt="Product"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <h4 className="text-sm font-medium text-white">RayBan Shades t...</h4>
            <p className="text-xs text-gray-400">NGN5,000</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMyOrders = () => (
    <div className="flex flex-col p-4 space-y-6">
      <h2 className="text-xl font-semibold">Orders</h2>
      
      {/* Order Status Tabs */}
      <div className="px-4 -mx-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max pb-2">
          {["New", "Delivered", "Cancelled"].map((tab) => (
            <button 
              key={tab}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 ${
                activeOrderTab === tab 
                  ? "bg-white text-black" 
                  : "bg-uniquest-gray text-white"
              }`}
              onClick={() => setActiveOrderTab(tab)}
            >
              <img
                src={tab === "New" 
                  ? "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736517127/new_bag-tick-2_qeidje.svg"
                  : "https://res.cloudinary.com/dlqzokzi3/image/upload/v1736517200/delivered_wmftvq.svg"
                }
                alt={tab}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">{tab}</span>
              {tab === "New" && (
                <span className={`flex items-center justify-center w-5 h-5 text-xs rounded-full ${
                  activeOrderTab === "New" 
                    ? "bg-black text-white" 
                    : "bg-white text-black"
                }`}>
                  0
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center space-y-4 mt-8">
        <div className="relative w-64 h-64">
          <img
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496964/my_orders_jb6lla.png"
            alt="No Orders"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-center text-gray-400 text-sm">
          You do not have any order so far. Try adding<br />a product if you haven't
        </p>
        <Button 
          className="w-full max-w-sm bg-white text-black hover:bg-gray-100"
          onClick={() => setShowAddProduct(true)}
        >
          Add product
        </Button>
      </div>
    </div>
  );

  if (showAddProduct) {
    return <AddProduct onBack={() => setShowAddProduct(false)} />;
  }

  return (
    <div className="min-h-screen bg-uniquest-dark text-white overflow-x-hidden">
      <Header 
        setIsCartOpen={setIsCartOpen}
        setIsNotificationOpen={setIsNotificationOpen}
      />
      
      <NavigationTabs 
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
        }}
      />

      {activeTab === 'marketplace' && renderMarketplace()}
      {activeTab === 'mystore' && renderMyStore()}
      {activeTab === 'myorders' && renderMyOrders()}

      <BottomNavigation onAddClick={() => setShowAddProduct(true)} />

      <NotificationPanel 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <ProductDetailsPanel
        isOpen={isProductDetailsOpen}
        onClose={() => setIsProductDetailsOpen(false)}
        onBuyClick={handleBuyProduct}
      />
      <DeliveryDetailsPanel
        isOpen={isDeliveryDetailsOpen}
        onClose={() => setIsDeliveryDetailsOpen(false)}
        onOrderComplete={handleOrderComplete}
      />
      <OrderDetailsPanel
        isOpen={isOrderDetailsOpen}
        onClose={() => setIsOrderDetailsOpen(false)}
      />
      {renderStoreSetupDialog()}
      {renderStoreCreatedDialog()}
    </div>
  );
};
