import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { sendOTP } from "../../lib/twilio";
import { sendVerificationEmail } from "../../lib/email";
import { toast } from "sonner";

interface SignUpScreenProps {
  onBack: () => void;
  onLoginClick: () => void;
  setCurrentScreen: (screen: "splash" | "getStarted" | "login" | "signup" | "passcode" | "confirmPasscode" | "verification") => void;
}

export const SignUpScreen = ({ onBack, onLoginClick, setCurrentScreen }: SignUpScreenProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await signUp(formData.email, formData.password);
      if (error) throw error;

      // Send OTP via Twilio (placeholder for now)
      const otp = "2222"; // Fixed OTP for testing
      // await sendOTP(formData.phoneNumber, otp); // Uncomment when Twilio is ready

      // Send verification email (placeholder)
      // await sendVerificationEmail(formData.email, `Your OTP is: ${otp}`); // Uncomment when Resend is ready

      toast.success("Signup successful! Check your phone and email for verification.");
      setCurrentScreen("verification");
    } catch (error: any) {
      toast.error(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-uniquest-dark p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-white">
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Get Started 🎉</h1>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Full Name"
          className="bg-uniquest-gray border-none text-white placeholder:text-gray-500"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
        />

        <Input
          placeholder="+234  Phone Number"
          className="bg-uniquest-gray border-none text-white placeholder:text-gray-500"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          required
        />

        <Input
          type="email"
          placeholder="Email"
          className="bg-uniquest-gray border-none text-white placeholder:text-gray-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <Select
          value={formData.gender}
          onValueChange={(value) => setFormData({ ...formData, gender: value })}
        >
          <SelectTrigger className="bg-uniquest-gray border-none text-white placeholder:text-gray-500">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent className="bg-uniquest-gray text-white">
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="password"
          placeholder="Password"
          className="bg-uniquest-gray border-none text-white placeholder:text-gray-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          className="bg-uniquest-gray border-none text-white placeholder:text-gray-500"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />

        <Button 
          type="submit" 
          className="w-full bg-black text-white py-6 mt-6"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Get Started"}
        </Button>

        <div className="text-center mt-4">
          <p className="text-gray-400">
            Have an account?{" "}
            <button
              type="button"
              onClick={onLoginClick}
              className="text-uniquest-purple hover:text-uniquest-purple-light"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};