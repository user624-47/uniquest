import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  fullContent?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Hi there's an announcement",
    description: "Lorem ipsum dolor sit amet consectetur. Diam neque risus tellus mauris urna quam. Pellentesque adipiscing nun...",
    date: "12th August 2023",
    category: "Just Now",
    fullContent: `Lorem ipsum dolor sit amet consectetur. Est mauris habitant aut posuere elementum. Adipiscing vitae mi pellentesque a faucibus auctor. Ornare nullam interdum sed quam morbi sed. Erat posuere elementum malesuada ac digniar. Sit ultrices sed est massa arcu ut id elementum amet. Aliquet turpis scelerisque nunc sit interdum nulla.

Sem faucibus venenatis sed et ipsum. Sed tristique diam egestas elementum aliquam metus est aliquam. Viverra dignissim donec nibh vivamus adipiscing. Mauris eros turpis massa posuere elementum. Facilisi mattis hen nec amet massa at. Amet quam tellus volutpat non nulla habitant dictumst tristique aliquet.

Nec purus viverra aliquam habitant porta vitae. Accumsan donec leo eaque congue est egestas vel pretium. Id eu suscipit aliquam id at arcu facilisi non mi. Suscipit nulla egestas sem vestibulum. Aliquet sed amet ante mauris ante et scelerisque erat. Consequat ullamcorper hendrerit pellentesque tellus nulla. Justo bibendum nam ut liborous lorem neque eget elementum et gravida. Morbi et sit dictumst erat senectus velit at lacus parturient. Duis et condimentum sit in. Urna diam pulvinar sit risusque ac accumsan mollis molestie. Leo eu gravida eget ullamcorper molestie nunc massa. Neque. Bibendum orci est magna nunc mus tortor nam vulputate sit. Rutrum non ut habitant elit voluptate sit morbi ullamcorper. Ornare arcu consequat adipiscing amet sed metus risus.`
  },
  {
    id: 2,
    title: "System maintenance notification",
    description: "Our system will undergo scheduled maintenance...",
    date: "11th August 2023",
    category: "Yesterday",
    fullContent: "Our system will undergo scheduled maintenance. During this time, some features may be temporarily unavailable. We apologize for any inconvenience this may cause."
  },
  {
    id: 3,
    title: "New feature announcement",
    description: "We've added exciting new features to enhance your experience...",
    date: "10th August 2023",
    category: "This Week",
    fullContent: "We've added exciting new features to enhance your experience. Check out our latest updates and improvements to make your gaming experience even better!"
  },
  {
    id: 4,
    title: "Special Event Coming Soon",
    description: "Get ready for an amazing gaming event...",
    date: "5th August 2023",
    category: "This Month",
    fullContent: "Get ready for an amazing gaming event that will bring together players from around the world. Don't miss out on this exciting opportunity!"
  },
  {
    id: 5,
    title: "Important Security Update",
    description: "We've enhanced our security measures...",
    date: "15th July 2023",
    category: "Last Month",
    fullContent: "We've enhanced our security measures to better protect your account and gaming experience. Your safety is our top priority."
  },
  {
    id: 6,
    title: "Community Guidelines Update",
    description: "Please review our updated community guidelines...",
    date: "1st July 2023",
    category: "Last Month",
    fullContent: "Please review our updated community guidelines to ensure a positive gaming environment for everyone. These changes reflect our commitment to maintaining a safe and enjoyable platform."
  }
];

export const NotificationPanel = ({ isOpen, onClose }: NotificationPanelProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.category]) {
      acc[notification.category] = [];
    }
    acc[notification.category].push(notification);
    return acc;
  }, {} as Record<string, Notification[]>);

  const handleNotificationClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-uniquest-dark text-white">
        <SheetHeader className="p-4 border-b border-uniquest-gray">
          <div className="flex items-center gap-3">
            <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={onClose} />
            <SheetTitle className="text-white">Notification Area</SheetTitle>
          </div>
          <p className="text-sm text-gray-400 text-left">All in-app activity notification appears here</p>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-100px)]">
          {Object.entries(groupedNotifications).map(([category, notifications]) => (
            <div key={category} className="p-4">
              <h3 className="text-sm font-medium mb-3">{category}</h3>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className="space-y-2 bg-uniquest-gray rounded-lg p-4 cursor-pointer transition-all duration-300"
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{notification.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{notification.date}</span>
                        {expandedId === notification.id ? (
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className={`transition-all duration-300 overflow-hidden ${
                      expandedId === notification.id ? 'max-h-[1000px]' : 'max-h-20'
                    }`}>
                      <p className="text-sm text-gray-400 whitespace-pre-line">
                        {expandedId === notification.id ? notification.fullContent : notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};