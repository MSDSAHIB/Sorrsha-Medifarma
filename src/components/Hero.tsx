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
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance font-modern text-gradient-rainbow">
                Advanced Medical Solutions for 
                <span className="block font-elegant text-gradient-elegant">Critical Care</span>
              </h1>
              <p className="text-xl max-w-2xl font-body text-gradient-primary">
                Trusted by hospitals and military units worldwide, Sorrsha Medipharma delivers 
                cutting-edge medical equipment and pharmaceuticals for life-saving care.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="lg" className="group" onClick={() => navigate('/products')}>
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 hover:bg-white/10 rainbow-border" onClick={() => navigate('/contact')}>
                Request Catalog
              </Button>
            </div>

            {/* Featured Product Categories */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 animate-fade-in rainbow-border" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-semibold mb-4 font-modern text-gradient-rainbow">Explore Our Key Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in colorful-glow" style={{ animationDelay: '0.8s' }} onClick={() => navigate('/products')}>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-colorful-pulse"></div>
                  <span className="text-sm text-foreground font-medium">Medicine & First Aid Equipment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in colorful-glow" style={{ animationDelay: '1s' }} onClick={() => navigate('/products')}>
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-colorful-pulse"></div>
                  <span className="text-sm text-foreground font-medium">Senior Citizen Supporting Kits</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in colorful-glow" style={{ animationDelay: '1.2s' }} onClick={() => navigate('/products')}>
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-colorful-pulse"></div>
                  <span className="text-sm text-foreground font-medium">Combat Operation & Rescue Equipment</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: '1.4s' }}>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2 animate-float" />
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Quality Assurance</div>
              </div>
              <div className="text-center animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: '1.6s' }}>
                <Award className="h-8 w-8 text-accent mx-auto mb-2 animate-float" style={{ animationDelay: '2s' }} />
                <div className="text-2xl font-bold text-foreground">ISO 13485</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: '1.8s' }}>
                <Users className="h-8 w-8 text-primary mx-auto mb-2 animate-float" style={{ animationDelay: '4s' }} />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Trusted Partners</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold animate-fade-in font-elegant text-gradient-elegant" style={{ animationDelay: '0.5s' }}>Why Choose Sorrsha?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.7s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow-pulse"></div>
                    <span className="text-muted-foreground">FDA approved medical devices</span>
                  </li>
                  <li className="flex items-start space-x-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.9s' }}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-glow-pulse"></div>
                    <span className="text-muted-foreground">24/7 emergency supply chain</span>
                  </li>
                  <li className="flex items-start space-x-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '1.1s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow-pulse"></div>
                    <span className="text-muted-foreground">Military-grade durability standards</span>
                  </li>
                  <li className="flex items-start space-x-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '1.3s' }}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-glow-pulse"></div>
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