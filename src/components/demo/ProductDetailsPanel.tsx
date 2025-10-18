import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, Share2, MessageCircle, Heart } from "lucide-react";
import { useState } from "react";

interface ProductDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onBuyClick: () => void;
}

export const ProductDetailsPanel = ({ isOpen, onClose, onBuyClick }: ProductDetailsPanelProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-lg p-0 bg-uniquest-dark border-uniquest-gray overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <button onClick={onClose} className="flex items-center text-white gap-2">
              <ChevronLeft className="w-5 h-5" />
              <span>RayBan Shades</span>
            </button>
          </div>

          {/* Price Section */}
          <div className="px-4 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-white text-lg font-semibold">NGN16,500</span>
              <span className="text-gray-400 text-sm line-through">NGN16,600</span>
              <span className="text-xs bg-[#FBC41D] text-black px-2 py-0.5 rounded-full">-20%</span>
            </div>
          </div>

          {/* Main Image and Thumbnails */}
          <div className="px-4">
            <div className="relative mb-4">
              <img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                alt="Product"
                className="w-full aspect-square object-cover rounded-xl"
              />
              <button 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#FBC41D] rounded-full"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart
                  className="w-4 h-4"
                  fill={isLiked ? "black" : "none"}
                  color="black"
                />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <img
                  key={index}
                  src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                />
              ))}
            </div>

            {/* Store Info */}
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736496674/shopping_image_scxzsk.png"
                alt="Store"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white text-sm">Doe boutique</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-[#FBC41D] fill-[#FBC41D]" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs">76 reviews</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs">281</span>
              <span className="text-gray-400 text-xs">700K</span>
            </div>
          </div>

            {/* Action Buttons */}
          <div className="px-4 flex gap-2 mb-4">
            <Button variant="outline" className="flex-1 bg-uniquest-gray border-none text-white hover:bg-uniquest-gray-light">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" className="flex-1 bg-uniquest-gray border-none text-white hover:bg-uniquest-gray-light">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Merchant
            </Button>
          </div>

            {/* Product Description */}
          <div className="px-4 flex-1">
            <h3 className="text-white font-medium mb-2">Product Description</h3>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur. Adipiscing vel consequat ut sit molestie tincidunt risus faucibus. Pulvinar dolor inoreet vel lectus. A natoque faucibus dignissim venenatis sit duis eu neque consectetur. Quis sagittis dui dolor est odio. Ultricies imperdiet duis odio integer tristique. A natoque faucibus dignissim venenatis sit duis eu neque consectetur.
            </p>
          </div>

            {/* Buy Button */}
            <div className="p-4 mt-auto">
              <Button 
                className="w-full bg-white text-black hover:bg-gray-100"
                onClick={onBuyClick}
              >
                Buy Product
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
