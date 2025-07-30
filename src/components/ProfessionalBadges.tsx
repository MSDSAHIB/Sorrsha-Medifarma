import { Shield, Award, CheckCircle, Globe, Clock, Star } from "lucide-react";

const ProfessionalBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "FDA Approved",
      description: "Medical Device Certified"
    },
    {
      icon: Award,
      text: "ISO 13485",
      description: "Quality Management"
    },
    {
      icon: CheckCircle,
      text: "CE Marked",
      description: "European Conformity"
    },
    {
      icon: Globe,
      text: "Global Reach",
      description: "50+ Countries"
    },
    {
      icon: Clock,
      text: "24/7 Support",
      description: "Emergency Response"
    },
    {
      icon: Star,
      text: "5-Star Rated",
      description: "Customer Excellence"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-secondary/50 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-shimmer">
            Trusted by Medical Professionals Worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            Our certifications and achievements speak to our commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="text-center group professional-hover badge-glow bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {badge.text}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBadges;