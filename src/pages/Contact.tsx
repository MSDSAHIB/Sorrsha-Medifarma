import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Globe, Award } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Sorrsha Medipharma
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our medical solutions experts. We're here to help 
              with your healthcare equipment needs 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input type="email" placeholder="your.email@hospital.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Organization</label>
                    <Input placeholder="Hospital/Military Unit Name" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your medical equipment needs..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="hero" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Headquarters</h3>
                        <p className="text-muted-foreground">
                          1234 Medical Center Drive<br />
                          Healthcare District, HD 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone Support</h3>
                        <p className="text-muted-foreground">
                          Emergency: +1 (555) 123-4567<br />
                          Sales: +1 (555) 123-4568<br />
                          Support: +1 (555) 123-4569
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email Support</h3>
                        <p className="text-muted-foreground">
                          General: info@sorrshamed.com<br />
                          Sales: sales@sorrshamed.com<br />
                          Emergency: emergency@sorrshamed.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                          Emergency Support: 24/7/365<br />
                          Weekend Support: 9:00 AM - 5:00 PM EST
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gradient-hero">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-hero">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">Emergency Support</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-primary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Emergency Medical Supply</h3>
                  <p className="mb-6">
                    Need emergency medical equipment? Our rapid response team 
                    is available 24/7 for critical situations.
                  </p>
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
                    Emergency Hotline: +1 (555) 911-MEDS
                  </Button>
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

export default Contact;