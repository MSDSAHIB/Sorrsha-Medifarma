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
      
    </div>
  );
};

export default FloatingElements;