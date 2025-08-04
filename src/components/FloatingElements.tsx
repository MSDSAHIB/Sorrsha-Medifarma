import { Activity, Heart, Shield, Zap } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating medical icons with colorful animations */}
      <div className="absolute top-20 left-10 animate-float-colors opacity-20">
        <Activity className="w-8 h-8 text-blue-500" style={{ animationDelay: '0s' }} />
      </div>
      
      <div className="absolute top-1/4 right-20 animate-float-colors opacity-20">
        <Heart className="w-6 h-6 text-pink-500" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="absolute bottom-1/3 left-20 animate-float-colors opacity-20">
        <Shield className="w-10 h-10 text-purple-500" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float-colors opacity-20">
        <Zap className="w-7 h-7 text-yellow-500" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Vibrant gradient orbs with colorful animations */}
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-vibrant rounded-full blur-xl animate-colorful-pulse opacity-30"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-gradient-rainbow rounded-full blur-xl animate-colorful-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl animate-rainbow-rotate opacity-25" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/2 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-xl animate-float-colors opacity-25" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default FloatingElements;