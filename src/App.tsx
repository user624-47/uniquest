import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Demo from "./pages/Demo";
import { InstallPWA } from "./components/pwa/InstallPWA";
import { DemoSplash } from "./components/demo/DemoSplash";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if app is installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setIsInstalled(true);
    }

    // Listen for PWA install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstalled(false);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Handle splash screen completion with a minimum display time
  const handleSplashComplete = () => {
    // Ensure splash screen shows for at least 2 seconds
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  };

  // If not installed, show install prompt
  if (!isInstalled && !showSplash) {
    return <InstallPWA />;
  }

  // Show splash screen first
  if (showSplash) {
    return <DemoSplash isVisible={true} onAnimationComplete={handleSplashComplete} />;
  }

  // Only show app content when installed and splash is done
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/demo/*" element={<Demo />} />
          <Route path="/*" element={<Demo />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;