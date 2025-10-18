import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-uniquest-gray py-16">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">UNIQUEST</h3>
            <p className="text-gray-400">
              Transform your shopping experience into an adventure
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UNIQUEST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};