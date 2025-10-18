import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Share2,
  PlusCircle,
  ArrowRight,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const InstallPWA = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [showNativePrompt, setShowNativePrompt] = useState(false);

  useEffect(() => {
    // Check if app is installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setIsOpen(false);
    }

    // Listen for PWA install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowNativePrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setIsOpen(false);
        setShowNativePrompt(false);
      }
    }
  };

  const handleClose = () => {
    setShowNativePrompt(false);
  };

  if (showNativePrompt) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 relative">
          <button 
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735625456/uniquest_logo_doru4f.png"
              alt="Uniquest Logo"
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">Install Uniquest app</h2>
              <p className="text-gray-400">uniquest.app</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            This site can be installed as an application. It will open in its own window and safely integrate with your device features.
          </p>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleClose}
            >
              Not now
            </Button>
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={handleInstall}
            >
              Install
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Only show manual instructions if native install is not available
  if (!deferredPrompt && isOpen) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-uniquest-dark min-h-screen flex items-center justify-center p-4"
        >
          <div className="max-w-md w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-uniquest-dark text-white p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <img
                    src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735625456/uniquest_logo_doru4f.png"
                    alt="Uniquest Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Welcome to Uniquest
                </h2>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <span>uniquest.app</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-pink-500/10 border-pink-500/20 text-pink-500 hover:bg-pink-500/20"
                  >
                    Download <PlusCircle className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="w-full space-y-4">
                <div
                  className="bg-uniquest-gray/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer transition-all hover:bg-uniquest-gray/30"
                  onClick={() => setStep(step === 2 ? 0 : 2)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <PlusCircle className="text-pink-500" />
                      <span className="font-medium text-lg">
                        1. Add to Home Screen{" "}
                        <ArrowRight className="inline ml-2 w-4 h-4 text-pink-500" />
                      </span>
                    </div>
                    {step === 2 ? (
                      <ChevronUp className="text-pink-500" />
                    ) : (
                      <ChevronDown className="text-pink-500" />
                    )}
                  </div>
                  {step === 2 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4"
                    >
                      <img
                        src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736939323/uniquest_demo_k2ie3c.jpg"
                        alt="Add to Home Screen Demo"
                        className="w-full rounded-lg mb-4"
                      />
                      <Button
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-6 text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        onClick={handleInstall}
                      >
                        <PlusCircle className="w-5 h-5" />
                        Add to Home Screen
                      </Button>
                    </motion.div>
                  )}
                </div>

                <div className="bg-uniquest-gray/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3">
                    <Share2 className="text-pink-500" />
                    <span className="font-medium text-lg">
                      2. Tap the share button
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 text-center">
                Get the full app experience by installing Uniquest on your device
              </p>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return null;
};
