import { Activity, Heart, Shield, Zap } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating medical icons */}
      <div className="absolute top-20 left-10 animate-float opacity-10">
        <Activity className="w-8 h-8 text-primary" style={{ animationDelay: '0s' }} />
      </div>
      
      <div className="absolute top-1/4 right-20 animate-float opacity-10">
        <Heart className="w-6 h-6 text-accent" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="absolute bottom-1/3 left-20 animate-float opacity-10">
        <Shield className="w-10 h-10 text-primary" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float opacity-10">
        <Zap className="w-7 h-7 text-accent" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default FloatingElements;