import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, ChevronRight, Copy, Pen } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

export const ProfileScreen = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-uniquest-dark text-white">
      {/* Header */}
      <header className="p-4 flex items-center gap-3">
        <Link to="/demo/home" className="text-white">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg font-semibold">Profile</h1>
      </header>

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-4 mb-8">
        <div className="relative">
          {/* Brown background circle */}
          <div className="absolute inset-0 bg-[#8B5E34] rounded-full -z-10 transform scale-110"></div>
          
          {/* Lightning image at top */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736494547/2_Lightning_Bolt_fhdker.png"
              alt="Lightning"
              className="w-6 h-6"
            />
          </div>
          
          <div onClick={() => setIsDialogOpen(true)} className="cursor-pointer">
            <Avatar className="w-20 h-20">
              <img src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736492702/avatar.png" alt="Profile" />
            </Avatar>
          </div>
        </div>
        <h2 className="text-lg font-semibold mt-3">Nelson Doe</h2>
      </div>

      {/* Change Avatar Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-uniquest-dark border-none text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">Change Avatar</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-gray-400">
              Tap on the avatar to access your gallery. So you can select your preferable image
            </p>
            <div className="relative w-32 h-32 bg-[#8B5E34] rounded-2xl flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736492702/avatar.png"
                alt="Profile"
                className="w-24 h-24"
              />
              <div className="absolute top-2 right-2 bg-black rounded-full p-2">
                <Pen className="w-4 h-4 text-white" />
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full text-white border-white hover:bg-white hover:text-black"
              onClick={() => setIsDialogOpen(false)}
            >
              Reset Avatar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Referral Section */}
      <div className="mx-4 mb-6 bg-uniquest-gray rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736494431/13_Medal_vl3jd8.png"
              alt="Referral"
              className="w-5 h-5"
            />
            <span>Referral</span>
          </div>
          <button className="text-sm text-white flex items-center gap-1">
            See More <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Earn points by helping friends to sign-up. The points you earn can be redeemed for fun.
        </p>
        <div className="flex items-center gap-2 bg-uniquest-gray-light rounded-lg p-3">
          <div className="flex-1 text-sm text-gray-400">uniquest.me/nelson</div>
          <Button variant="ghost" size="sm" className="text-[#0EA5E9]">
            <Copy className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Account Information */}
      <div className="px-4">
        <h3 className="text-lg font-semibold mb-4">Account Information</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p>NelsonDoe@gmail.com</p>
            </div>
            <Button variant="ghost" size="sm">
              <Pen className="w-4 h-4 text-[#0EA5E9]" />
            </Button>
          </div>
          <div>
            <p className="text-sm text-gray-400">Mobile Number</p>
            <p>+234 812345678</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Country</p>
            <p>Nigeria</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Withdrawal Amount</p>
              <p>Koin Bank (1234567890)</p>
            </div>
            <Button variant="ghost" size="sm">
              <Pen className="w-4 h-4 text-[#0EA5E9]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="px-4 mt-8">
        <h3 className="text-lg font-semibold mb-4">Notification</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>Push Notifications</p>
            <Switch />
          </div>
          <div className="flex justify-between items-center">
            <p>Email Marketing</p>
            <Switch />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="px-4 mt-8">
        <h3 className="text-lg font-semibold mb-4">Security</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>Biometrics for Login & Transactions</p>
            <Switch />
          </div>
          <button className="w-full text-left py-2">Change Password</button>
          <button className="w-full text-left py-2">Change Transaction PIN</button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 mt-8 pb-20">
        <Button variant="destructive" className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
};