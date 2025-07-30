import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import WhyUs from "@/components/WhyUs";
import ProfessionalBadges from "@/components/ProfessionalBadges";
import FloatingElements from "@/components/FloatingElements";
import LoadingSpinner from "@/components/LoadingSpinner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <LoadingSpinner />
      <FloatingElements />
      <Navigation />
      <Hero />
      <ProfessionalBadges />
      <ProductShowcase />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Index;
