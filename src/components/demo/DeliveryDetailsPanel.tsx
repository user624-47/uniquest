import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import unicode from "country-flag-icons/unicode";

interface DeliveryDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderComplete: () => void;
}

// Phone prefix data with country codes
const phonePrefixes = [
  { code: "NG", prefix: "+234", name: "Nigeria" },
  { code: "US", prefix: "+1", name: "United States" },
  { code: "GB", prefix: "+44", name: "United Kingdom" },
  { code: "CA", prefix: "+1", name: "Canada" },
  { code: "AU", prefix: "+61", name: "Australia" },
  { code: "IN", prefix: "+91", name: "India" },
  { code: "ZA", prefix: "+27", name: "South Africa" },
  { code: "GH", prefix: "+233", name: "Ghana" },
  { code: "KE", prefix: "+254", name: "Kenya" },
  { code: "FR", prefix: "+33", name: "France" },
  { code: "DE", prefix: "+49", name: "Germany" },
];

export const DeliveryDetailsPanel = ({ isOpen, onClose, onOrderComplete }: DeliveryDetailsPanelProps) => {
  const [phonePrefix, setPhonePrefix] = useState("+234");

  const handleBuyProduct = () => {
    onClose();
    onOrderComplete();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-lg bg-uniquest-dark border-uniquest-gray overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-white">Delivery Details</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          <div className="space-y-2">
            <label className="text-white text-sm">Your full name</label>
            <Input 
              placeholder="Full name" 
              className="bg-uniquest-gray border-none text-white"
            />
            <p className="text-xs text-gray-400">Please enter your full name so we can contact you easily</p>
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm">Phone Number</label>
            <div className="flex gap-2">
              <Select defaultValue={phonePrefix} onValueChange={setPhonePrefix}>
                <SelectTrigger className="w-[140px] bg-uniquest-gray border-none text-white">
                  <SelectValue placeholder="Select prefix" />
                </SelectTrigger>
                <SelectContent className="bg-uniquest-gray text-white max-h-[300px]">
                  {phonePrefixes.map((country) => (
                    <SelectItem 
                      key={`${country.code}-${country.prefix}`} 
                      value={country.prefix}
                      className="flex items-center gap-2"
                    >
                      <span className="mr-2">{unicode[country.code]}</span>
                      <span>{country.prefix}</span>
                      <span className="text-gray-400 text-sm">({country.name})</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input 
                placeholder="Enter phone number" 
                className="flex-1 bg-uniquest-gray border-none text-white"
              />
            </div>
            <p className="text-xs text-gray-400">Please enter the phone number that should be contacted when we want to deliver your order.</p>
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm">State</label>
            <Select>
              <SelectTrigger className="w-full bg-uniquest-gray border-none text-white">
                <SelectValue placeholder="Select a State" />
              </SelectTrigger>
              <SelectContent className="bg-uniquest-gray text-white">
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="abuja">Abuja</SelectItem>
                <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm">LGA</label>
            <Select>
              <SelectTrigger className="w-full bg-uniquest-gray border-none text-white">
                <SelectValue placeholder="Select a City" />
              </SelectTrigger>
              <SelectContent className="bg-uniquest-gray text-white">
                <SelectItem value="ikeja">Ikeja</SelectItem>
                <SelectItem value="lekki">Lekki</SelectItem>
                <SelectItem value="victoria-island">Victoria Island</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm">Address</label>
            <Textarea 
              placeholder="Enter your address"
              className="bg-uniquest-gray border-none text-white resize-none h-24"
            />
            <p className="text-xs text-gray-400">Please enter your full delivery address such as Building No., Street, Area, City, State.</p>
          </div>

          <div className="bg-uniquest-gray rounded-xl p-4 space-y-2">
            <h3 className="text-white font-medium">Return Policy</h3>
            <p className="text-sm text-gray-400">
              We have a very good return policy that allows you to return faulty or wrong items that are delivered to you. You can return the item within 7 day(s) after purchase if the product is in good condition.
            </p>
          </div>

          <Button 
            className="w-full bg-white text-black hover:bg-gray-100"
            onClick={handleBuyProduct}
          >
            Buy Product
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};