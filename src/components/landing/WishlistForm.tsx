import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export const WishlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Added to wishlist!",
      description: "We'll notify you when the app launches in your region.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 max-w-md mx-auto"
    >
      <div className="flex items-center justify-center mb-4">
        <Heart className="w-8 h-8 text-uniquest-purple animate-pulse" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">
        Join the Wishlist
      </h3>
      <p className="text-gray-400 text-sm mb-4 text-center">
        Be the first to know when UNIQUEST launches in your region
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-uniquest-purple hover:bg-uniquest-purple/90"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Adding...
            </span>
          ) : (
            "Add to Wishlist"
          )}
        </Button>
      </form>
    </motion.div>
  );
};