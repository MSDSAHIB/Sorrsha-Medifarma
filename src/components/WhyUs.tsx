import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Globe, 
  Award, 
  Users, 
  Heart,
  Zap,
  CheckCircle 
} from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "FDA Approved",
      description: "All our products meet stringent FDA regulations and international quality standards.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency supply chain management.",
      color: "text-accent"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving healthcare facilities and military units across 50+ countries worldwide.",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "ISO Certified",
      description: "ISO 13485 certified manufacturing processes ensuring consistent quality.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Trusted Partners",
      description: "Over 500 hospitals and military units rely on our medical solutions.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Life-Saving Mission",
      description: "Dedicated to providing critical medical equipment when lives are on the line.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Emergency response capabilities with rapid deployment to critical situations.",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "99.9% quality assurance with comprehensive testing and validation.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-shimmer">
            Why Choose Sorrsha Medipharma?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built our reputation on reliability, quality, and life-saving innovations. 
            Here's what sets us apart in the medical industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-hero">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background shadow-elegant ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Healthcare Institutions
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            From major metropolitan hospitals to military field operations, 
            Sorrsha Medipharma provides the critical medical solutions that save lives every day.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Quality Standard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;