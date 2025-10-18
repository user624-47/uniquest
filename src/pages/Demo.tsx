import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { DemoSplash } from "@/components/demo/DemoSplash";
import { GetStartedScreen } from "@/components/demo/GetStartedScreen";
import { SignUpScreen } from "@/components/demo/SignUpScreen";
import { LoginScreen } from "@/components/demo/LoginScreen";
import { PasscodeScreen } from "@/components/demo/PasscodeScreen";
import { ConfirmPasscodeScreen } from "@/components/demo/ConfirmPasscodeScreen";
import { VerificationScreen } from "@/components/demo/VerificationScreen";
import { VerificationComplete } from "@/components/demo/VerificationComplete";
import { HomeScreen } from "@/components/demo/HomeScreen";
import { ProfileScreen } from "@/components/demo/ProfileScreen";
import { MarketPlace } from "@/components/demo/MarketPlace";
import TreasuryScreen from "@/components/demo/TreasuryScreen";
import QuestScreen from "@/components/demo/QuestScreen";

const Demo = () => {
  const navigate = useNavigate();
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashComplete = () => {
    setIsSplashVisible(false);
    navigate('/demo/get-started');
  };

  const handleLoginClick = () => {
    navigate('/demo/login');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleScreenChange = (screen: "splash" | "getStarted" | "login" | "signup" | "passcode" | "confirmPasscode" | "verification") => {
    navigate(`/demo/${screen}`);
  };

  if (isSplashVisible) {
    return (
      <DemoSplash 
        isVisible={isSplashVisible} 
        onAnimationComplete={handleSplashComplete} 
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={
        <DemoSplash 
          isVisible={isSplashVisible} 
          onAnimationComplete={handleSplashComplete} 
        />
      } />
      <Route path="get-started" element={
        <GetStartedScreen 
          onLoginClick={handleLoginClick}
          setCurrentScreen={handleScreenChange}
        />
      } />
      <Route path="signup" element={
        <SignUpScreen 
          onBack={handleBack}
          onLoginClick={handleLoginClick}
          setCurrentScreen={handleScreenChange}
        />
      } />
      <Route path="login" element={<LoginScreen />} />
      <Route path="passcode" element={<PasscodeScreen />} />
      <Route path="confirm-passcode" element={<ConfirmPasscodeScreen />} />
      <Route path="verification" element={
        <VerificationScreen 
          onBack={handleBack}
        />
      } />
      <Route path="verification-complete" element={<VerificationComplete />} />
      <Route path="home" element={<HomeScreen />} />
      <Route path="profile" element={<ProfileScreen />} />
      <Route path="market" element={<MarketPlace />} />
      <Route path="treasury" element={<TreasuryScreen />} />
      <Route path="quests" element={<QuestScreen />} />
    </Routes>
  );
};

export default Demo;