import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { Footer } from "@/components/landing/Footer";
import { Navigation } from "@/components/landing/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen bg-uniquest-dark text-white">
      <Navigation />
      <Hero />
      <Features />
      <AppShowcase />
      <Footer />
    </main>
  );
};

export default Index;