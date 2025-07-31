import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern medical facility" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Advanced Medical Solutions for 
                <span className="text-primary block text-shimmer">Critical Care</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Trusted by hospitals and military units worldwide, Sorrsha Medipharma delivers 
                cutting-edge medical equipment and pharmaceuticals for life-saving care.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" onClick={() => navigate('/products')}>
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
                Request Catalog
              </Button>
            </div>

            {/* Featured Product Categories */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Explore Our Key Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => navigate('/products')}>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground font-medium">Medicine & First Aid Equipment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => navigate('/products')}>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm text-foreground font-medium">Senior Citizen Supporting Kits</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => navigate('/products')}>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground font-medium">Combat Operation & Rescue Equipment</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Quality Assurance</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">ISO 13485</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Trusted Partners</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Why Choose Sorrsha?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">FDA approved medical devices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">24/7 emergency supply chain</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Military-grade durability standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Global distribution network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;