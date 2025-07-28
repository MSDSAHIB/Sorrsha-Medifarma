import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Sorrsha Medifarma
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the medical industry with innovative solutions, unwavering quality, 
              and a commitment to saving lives in hospitals and military operations worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Sorrsha Medifarma, we are dedicated to advancing healthcare through 
                cutting-edge medical technology and pharmaceutical solutions. Our mission 
                is to provide life-saving equipment and supplies to healthcare professionals 
                when they need them most.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2010, we have grown from a small medical supply company to 
                a global leader in medical technology, serving over 500 healthcare 
                institutions and military units across 50+ countries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-hero">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Healthcare Partners</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-hero">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-hero">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Quality Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-hero">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">ISO</div>
                  <div className="text-sm text-muted-foreground">13485 Certified</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Excellence</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in everything we do, 
                    from product development to customer service.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Trust</h3>
                  <p className="text-muted-foreground">
                    Healthcare professionals depend on us for critical situations. 
                    We honor that trust with reliable, tested solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously advance medical technology to meet 
                    evolving healthcare challenges worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;