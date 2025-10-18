import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Plus, Image } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AddProduct = ({ onBack }: { onBack: () => void }) => {
  const [images, setImages] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Add Product</h1>
      </div>

      <div className="space-y-6">
        {/* Product Images */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Product Images</p>
          <div className="bg-uniquest-gray rounded-xl p-6 mb-3">
            <div className="flex flex-col items-center justify-center">
              <Image className="w-12 h-12 mb-2" />
              <p className="text-white font-medium mb-1">Upload Product Image</p>
              <p className="text-xs text-gray-400">Supported formats: JPEG, PNG</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <button className="aspect-square rounded-xl bg-uniquest-gray flex items-center justify-center">
              <Image className="w-6 h-6" />
            </button>
            {[1, 2, 3].map((_, index) => (
              <button
                key={index}
                className="aspect-square rounded-xl bg-uniquest-gray flex items-center justify-center"
              >
                <Image className="w-6 h-6" />
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1">Supported formats: JPEG, PNG</p>
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Product Name</label>
            <Input
              placeholder="Enter your product name"
              className="mt-1 bg-uniquest-gray border-none text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Product Description</label>
            <Textarea
              placeholder="Enter your product description"
              className="mt-1 bg-uniquest-gray border-none text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Category</label>
            <Select>
              <SelectTrigger className="w-full mt-1 bg-uniquest-gray border-none text-gray-400">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="bg-uniquest-gray text-white">
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="home">Home</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Available Quantity</label>
            <Select>
              <SelectTrigger className="w-full mt-1 bg-uniquest-gray border-none text-gray-400">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="bg-uniquest-gray text-white">
                {[10, 20, 30, 40, 50].map((qty) => (
                  <SelectItem key={qty} value={qty.toString()}>
                    {qty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Variant</label>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 mb-1">Available Color (Optional)</p>
                <Input
                  placeholder="Enter available colors and separate inputs with (Comma ,)"
                  className="bg-uniquest-gray border-none text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Available Size (Optional)</p>
                <Input
                  placeholder="Enter available sizes and separate inputs with (Comma ,)"
                  className="bg-uniquest-gray border-none text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Price</label>
            <Input
              placeholder="NGN"
              className="mt-1 bg-uniquest-gray border-none text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Discount (Optional)</label>
            <Input
              placeholder="NGN"
              className="mt-1 bg-uniquest-gray border-none text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Shipping</label>
            <div className="flex gap-3 mt-1">
              <Select>
                <SelectTrigger className="flex-1 bg-uniquest-gray border-none text-gray-400">
                  <SelectValue placeholder="Select a region" />
                </SelectTrigger>
                <SelectContent className="bg-uniquest-gray text-white">
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                  <SelectItem value="ph">Port Harcourt</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="NGN"
                className="w-24 bg-uniquest-gray border-none text-white"
              />
            </div>
            <button className="flex items-center gap-2 mt-2">
              <Plus className="w-4 h-4" />
              <span className="text-sm text-gray-400">New location & Pricing</span>
            </button>
          </div>
        </div>

        <Button className="w-full bg-white text-black hover:bg-gray-100">
          Proceed to add product
        </Button>
      </div>
    </div>
  );
};
