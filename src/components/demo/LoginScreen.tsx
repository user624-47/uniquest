import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "sonner";

interface LoginScreenProps {
  onSuccess?: () => void;
}

export const LoginScreen = ({ onSuccess }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await signIn(email, password);
      if (error) throw error;
      toast.success("Login successful!");
      navigate('/demo/home');
      onSuccess?.();
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-uniquest-dark px-6 py-8">
      {/* Logo and Welcome Text */}
      <div className="mb-12">
        <div className="flex items-center gap-2 justify-center mb-8">
          <img 
            src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1735625456/uniquest_logo_doru4f.png"
            alt="Uniquest Logo" 
            className="w-8 h-8"
          />
          <span className="text-white text-xl font-semibold">Uniquest</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">Welcome Back 🎉</h1>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-uniquest-gray border-none text-white placeholder:text-gray-400"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-uniquest-gray border-none text-white placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="border-gray-400 data-[state=checked]:bg-uniquest-purple data-[state=checked]:border-uniquest-purple"
            />
            <Label 
              htmlFor="remember" 
              className="text-sm text-gray-400"
            >
              Remember Me
            </Label>
          </div>
          <button 
            type="button" 
            className="text-sm text-gray-400 hover:text-uniquest-purple"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <Button 
          type="submit" 
          className="w-full bg-white text-black hover:bg-white/90 mt-6"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <button 
              type="button" 
              className="text-uniquest-purple hover:text-uniquest-purple-light"
              onClick={() => navigate('/demo/signup')}
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};