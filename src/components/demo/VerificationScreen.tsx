import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";

interface VerificationScreenProps {
  onBack: () => void;
}

export const VerificationScreen = ({ onBack }: VerificationScreenProps) => {
  const [value, setValue] = useState("");
  const { toast } = useToast();

  const handleComplete = (value: string) => {
    toast({
      title: "Verification code entered",
      description: `You entered: ${value}`,
    });
  };

  return (
    <div className="min-h-screen bg-uniquest-dark text-white p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          Verification
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#4CAF50"/>
            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </h1>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-8">
        A unique code has been sent to your email address. Do not share with anyone.
      </p>

      {/* OTP Input */}
      <div className="mb-8">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
          onComplete={handleComplete}
          render={({ slots }) => (
            <InputOTPGroup className="gap-2 justify-center">
              {slots.map((slot, index) => (
                <InputOTPSlot
                  key={index}
                  {...slot}
                  index={index}
                  className="w-12 h-12 border-2 border-gray-700 bg-transparent text-white rounded-lg"
                />
              ))}
            </InputOTPGroup>
          )}
        />
      </div>

      {/* Resend Code */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-gray-400">Didn't get code?</span>
        <button 
          className="text-blue-500"
          onClick={() => {
            toast({
              title: "Code Resent",
              description: "A new verification code has been sent to your email.",
            });
          }}
        >
          Resend Code
        </button>
      </div>

      {/* Verify Button */}
      <Button 
        className="w-full bg-black text-white py-6 rounded-xl"
        disabled={value.length !== 6}
        onClick={() => {
          if (value.length === 6) {
            toast({
              title: "Verification Successful",
              description: "Your account has been verified successfully.",
            });
          }
        }}
      >
        Verify
      </Button>
    </div>
  );
};